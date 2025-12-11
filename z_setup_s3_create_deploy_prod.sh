#!/bin/bash
set -x
set -e
# shellcheck disable=SC2120
setup_environment_prod() {
    export tenant_name="beaninfosys"
    export VENV_NAME="${tenant_name}_venv"
    export stage="PROD"
    export SERVICE_NAME=$(basename "$PWD" | tr '[:upper:]' '[:lower:]')

    PROFILE=${tenant_name}
    ENVIRONMENT=${stage}    
    REGION=${4:-"us-west-1"} 
    PROJECT_NAME=${SERVICE_NAME}
    
    export TENANT_UPPER=$(echo ${tenant_name} | tr '[:lower:]' '[:upper:]')
    export STAGE_UPPER=$(echo ${stage} | tr '[:lower:]' '[:upper:]')

    ENVIRONMENT_LOWER=$(echo ${ENVIRONMENT} | tr '[:upper:]' '[:lower:]')
    
    export certificate_domain_lookup="*.beaninfosys.net"
    export domain_name="beaninfosys.net"
    export web_app_build_path=$(realpath "./dist")
    export subdomain_name="www.beaninfosys.net"
    export apex_domain_name="beaninfosys.net"
    export web_s3_bucket_name=$subdomain_name
    export certificate_arn="arn:aws:acm:us-east-1:180020381158:certificate/8d6e3050-f1c1-477d-a758-4f6d6888a5fb"
}

# AWS Configuration
AWS_REGION="us-west-1"
AWS_PROFILE="beaninfosys"

# Source utility functions
source ./infra/utils.sh
source ./infra/terraform_utils.sh
# Convert the relative path to an absolute path
web_app_build_path=$(realpath "./dist")

main() {
    build_web_app
    find . -type f -name "*.sh" -exec dos2unix {} \;
    setup_environment_prod
    setup_aws
    deploy_terraform "$PROFILE" "$ENVIRONMENT" "$REGION" "$PROJECT_NAME" "$domain_name" "$web_app_build_path" "$web_s3_bucket_name" "$certificate_arn"  "$apex_domain_name"
}

# Execute main function
main "$@"

