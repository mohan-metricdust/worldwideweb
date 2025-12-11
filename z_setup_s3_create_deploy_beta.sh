#!/bin/bash
set -x
set -e
# shellcheck disable=SC2120
setup_environment_beta() {
    export tenant_name="beaninfosys"
    export VENV_NAME="${tenant_name}_venv"
    export stage="BETA"
    export SERVICE_NAME=$(basename "$PWD" | tr '[:upper:]' '[:lower:]')
    export web_app_build_path=$(realpath "./dist")

    PROFILE=${tenant_name}
    ENVIRONMENT=${stage}    
    REGION=${4:-"us-west-2"} 
    PROJECT_NAME=${SERVICE_NAME}
    
    export TENANT_UPPER=$(echo ${tenant_name} | tr '[:lower:]' '[:upper:]')
    export STAGE_UPPER=$(echo ${stage} | tr '[:lower:]' '[:upper:]')

    ENVIRONMENT_LOWER=$(echo ${ENVIRONMENT} | tr '[:upper:]' '[:lower:]')
    
    export certificate_domain_lookup="*.beta.beaninfosys.net"
    export domain_name="beaninfosys.net"
    export apex_domain_name="${ENVIRONMENT_LOWER}.beaninfosys.net"
    export subdomain_name="www.${ENVIRONMENT_LOWER}.beaninfosys.net"
    export web_s3_bucket_name=$subdomain_name
    export certificate_arn="arn:aws:acm:us-east-1:180020381158:certificate/f8eeca2e-f610-4ebb-bf77-f28aa6f16673"
}

# AWS Configuration
AWS_REGION="us-west-2"
AWS_PROFILE="beaninfosys"

# Source utility functions
source ./infra/utils.sh
source ./infra/terraform_utils.sh

main() {
    build_web_app
    find . -type f -name "*.sh" -exec dos2unix {} \;
    setup_environment_beta
    setup_aws
    
    deploy_terraform "$PROFILE" "$ENVIRONMENT" "$REGION" "$PROJECT_NAME" "$domain_name" "$web_app_build_path" "$web_s3_bucket_name" "$certificate_arn"  "$apex_domain_name"
}

# Execute main function
main "$@"

