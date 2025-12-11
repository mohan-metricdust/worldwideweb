#!/bin/bash

# Initialize common variables
init_terraform_deployment_vars() {
    local profile=${1}
    local environment=${2}
    local region=${3}

    # Get project name from directory name
    PROJECT_NAME=$(basename $(pwd))

    echo "Deploying project: ${PROJECT_NAME}"
    echo "Environment: ${environment}"
    echo "AWS Profile: ${profile}"
    echo "AWS Region: ${region}"

    # Create temporary directory for Terraform files
    TEMP_TF_PATH="$(pwd)/infra/terraform/.terraform"
    LOCAL_TF_PLAN="${TEMP_TF_PATH}/${PROJECT_NAME}_${environment}.tfplan"
    mkdir -p $TEMP_TF_PATH
}

# Create and configure S3 backend bucket
setup_terraform_backend() {
    local profile=${1}
    local region=${2}
    local backend_bucket=${3}
    
    echo "DEBUG: Attempting to access bucket: ${backend_bucket}"
    echo "DEBUG: Using AWS Profile: ${profile}"
    echo "DEBUG: Using Region: ${region}"
    
    # Check if bucket exists with more verbose output
    set +e
    aws s3 ls "s3://${backend_bucket}" --profile "${profile}" --region "${region}"
    bucket_check=$?
    echo "DEBUG: Bucket check exit code: ${bucket_check}"
    set -e
    if [ $bucket_check -eq 0 ]; then
        echo "Using existing S3 backend bucket: ${backend_bucket}"
    else
        echo "Creating new S3 backend bucket: ${backend_bucket}"
        # Create the bucket
        if ! aws s3api create-bucket \
            --bucket "${backend_bucket}" \
            --profile "${profile}" \
            --region "${region}" \
            $([ "${region}" != "us-east-1" ] && echo "--create-bucket-configuration LocationConstraint=${region}") ; then
            echo "Failed to create S3 bucket"
            exit 1
        fi

        # Enable versioning
        aws s3api put-bucket-versioning \
            --bucket "${backend_bucket}" \
            --profile "${profile}" \
            --versioning-configuration Status=Enabled

        # Enable encryption
        aws s3api put-bucket-encryption \
            --bucket "${backend_bucket}" \
            --profile "${profile}" \
            --server-side-encryption-configuration '{
                "Rules": [
                    {
                        "ApplyServerSideEncryptionByDefault": {
                            "SSEAlgorithm": "AES256"
                        }
                    }
                ]
            }'

        # Block public access
        aws s3api put-public-access-block \
            --bucket "${backend_bucket}" \
            --profile "${profile}" \
            --public-access-block-configuration '{
                "BlockPublicAcls": true,
                "IgnorePublicAcls": true,
                "BlockPublicPolicy": true,
                "RestrictPublicBuckets": true
            }'

        echo "Successfully created and configured S3 backend bucket"
    fi

    echo "${backend_bucket}"
}

# Create terraform vars file
create_tfvars() {
    local profile=${1}
    local environment=${2}
    local region=${3}
    local tfvars_path=${4}
    local image_name_passed_as_parameter=${5}
    local domain_name=${6}
    local subdomain_name=${7}
    local certificate_domain_lookup=${8}
    local web_app_build_path=${9}
    local web_s3_bucket_name=${10}
    local certificate_arn=${11}
    local apex_domain_name=${12}

    echo "DEBUG: certificate_arn in create_tfvars: ${certificate_arn}"
    
    # Add environment variables from shell environment
    echo "livekit_url = \"${LIVEKIT_URL}\"" > ${tfvars_path}
    echo "livekit_api_key = \"${LIVEKIT_API_KEY}\"" >> ${tfvars_path}
    echo "livekit_api_secret = \"${LIVEKIT_API_SECRET}\"" >> ${tfvars_path}
    echo "ecr_repo = \"${image_name_passed_as_parameter}\"" >> ${tfvars_path}
    echo "project_name = \"${PROJECT_NAME}\"" >> ${tfvars_path}
    echo "environment = \"${environment}\"" >> ${tfvars_path}
    echo "aws_profile = \"${profile}\"" >> ${tfvars_path}
    echo "aws_region = \"${region}\"" >> ${tfvars_path}
    echo "prefix = \"${environment}_${PROJECT_NAME}\"" >> ${tfvars_path}
    echo "image_name_passed_as_parameter = \"${image_name_passed_as_parameter}\"" >> ${tfvars_path}
    echo "domain_name = \"${domain_name}\"" >> ${tfvars_path}
    echo "subdomain_name = \"${subdomain_name}\"" >> ${tfvars_path}
    echo "certificate_domain_lookup = \"${certificate_domain_lookup}\"" >> ${tfvars_path}
    echo "certificate_arn = \"${certificate_arn}\"" >> ${tfvars_path}
    echo "web_app_build_path = \"${web_app_build_path}\"" >> ${tfvars_path}
    echo "web_s3_bucket_name = \"${web_s3_bucket_name}\"" >> ${tfvars_path}
    echo "profile_aws_name = \"${profile}\"" >> ${tfvars_path}
    echo "apex_domain_name = \"${apex_domain_name}\"" >> ${tfvars_path}
}


# Run terraform init, plan, and apply
run_terraform() {
    local profile=${1}
    local environment=${2}
    local region=${3}
    local tfvars_path=${4}
    local plan_path=${5}
    local backend_bucket=${6}

    cd infra/terraform

    echo "DEBUG: Initializing Terraform with backend config:"
    echo "  Region: ${region}"
    echo "  Key: ${PROJECT_NAME}/${environment}/terraform.tfstate"
    echo "  Profile: ${profile}"
    echo "  Bucket: ${backend_bucket}"

    # Initialize Terraform with S3 backend configuration
    echo "===== Starting Terraform Init ====="
    terraform init -reconfigure \
        -backend-config="bucket=${backend_bucket}" \
        -backend-config="region=${region}" \
        -backend-config="key=${PROJECT_NAME}/${environment}/terraform.tfstate" \
        -backend-config="profile=${profile}"

    # Import existing resources if they exist
    echo "===== Checking Existing Resources ====="
    #check_and_import_resources "$profile" "$environment"

    echo "===== Starting Terraform Plan ====="
    if ! terraform plan \
        -var-file=$tfvars_path \
        -out=$plan_path \
        -lock=false \
        -input=false; then
        echo "Terraform plan failed. Please check the errors above."
        exit 1
    fi

    echo "===== Starting Terraform Apply ====="
    if ! terraform apply -lock=false $plan_path; then
        echo "Terraform apply failed. Please check the errors above."
        exit 1
    fi

    echo "===== Fetching Outputs ====="
    terraform refresh -var-file=$tfvars_path
    terraform output > "../terraform_outputs_${environment}.txt"

    echo "Deployment Complete!"

    cd ../..

}


# Main deployment function
deploy_terraform() {
    local profile=${1}
    local environment=${2}
    local region=${3}
    local project_name=${4}
    local domain_name=${5}
    local web_app_build_path=${6}
    local web_s3_bucket_name=${7}
    local certificate_arn=${8}
    local apex_domain_name=${9}
    
    echo "DEBUG: certificate_arn in deploy_terraform: ${certificate_arn}"

    export IMAGE_NAME="${project_name}_${profile}_${environment}_image"
        
    image_name_passed_as_parameter="${project_name}/${IMAGE_NAME}"

    echo "image_name_passed_as_parameter: ${image_name_passed_as_parameter}"

    init_terraform_deployment_vars "$profile" "$environment" "$region"
    
    # Create the backend bucket name
    local BACKEND_BUCKET="terraform-$(echo ${environment} | tr '[:upper:]' '[:lower:]')-$(echo ${profile} | tr '[:lower:]' '[:lower:]')-state"
    
    export BACKEND_BUCKET
    
    echo "DEBUG: Created backend bucket name: ${BACKEND_BUCKET}"
    
    # Setup S3 backend bucket
    setup_terraform_backend "$profile" "$region" "$BACKEND_BUCKET"
    
    echo "DEBUG: Backend bucket being passed to run_terraform: ${BACKEND_BUCKET}"
    
    TFVARS_FILE="${TEMP_TF_PATH}/terraform.tfvars"
    
    create_tfvars "$profile" "$environment" "$region" "$TFVARS_FILE" "$image_name_passed_as_parameter" "$domain_name" "$subdomain_name" "$certificate_domain_lookup" "$web_app_build_path" "$web_s3_bucket_name" "$certificate_arn" "$apex_domain_name"

    run_terraform "$profile" "$environment" "$region" "$TFVARS_FILE" "$LOCAL_TF_PLAN" "$BACKEND_BUCKET"
}

