#!/bin/bash

set -x

###########################################
# Print Utilities
###########################################
print_green() {
    if [[ -t 1 ]] && [[ -n "$TERM" ]]; then
        tput setaf 2
        echo "$1"
        tput sgr0
    else
        echo "$1"
    fi
}

print_red() {
    if [[ -t 1 ]] && [[ -n "$TERM" ]]; then
        tput setaf 1
        echo "$1"
        tput sgr0
    else
        echo "$1"
    fi
}



###########################################
# AWS Utilities
###########################################
setup_aws() {
    print_green "🔑 Initializing AWS CLI profile '${AWS_PROFILE}'..."
    aws configure list-profiles | grep -q "^${AWS_PROFILE}$" || { 
        print_red "❌ AWS profile '${AWS_PROFILE}' does not exist! Please configure it using: aws configure --profile ${AWS_PROFILE}"
        exit 2
    }

    AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query "Account" --output text --profile ${AWS_PROFILE})
    if [[ -z "$AWS_ACCOUNT_ID" ]]; then
        print_red "❌ Failed to retrieve AWS account ID. Check your AWS credentials."
        exit 1
    fi
}

cleanup_docker() {

    docker stop $(docker ps -q)
    docker rm $(docker ps -a -q)
    docker rmi $(docker images -q)
    docker system prune -f
}


###########################################
# Terraform Utilities
###########################################
init_deployment_vars() {
    local profile=$1
    local environment=$2
    local region=$3

    # Get project name from directory name
    PROJECT_NAME=$(basename $(pwd))

    print_green "Deploying project: ${PROJECT_NAME}"
    print_green "Environment: ${environment}"
    print_green "AWS Profile: ${profile}"
    print_green "AWS Region: ${region}"

    # Create temporary directory for Terraform files
    TEMP_TF_PATH="$(pwd)/infra/terraform/.terraform"
    LOCAL_TF_PLAN="${TEMP_TF_PATH}/${PROJECT_NAME}_${environment}.tfplan"
    mkdir -p $TEMP_TF_PATH
}


setup_environment_local() {
    export VENV_NAME="${tenant_name}_venv"
    export stage="LOCAL"
    export SERVICE_NAME=$(basename "$PWD")
    
    export TENANT_UPPER=$(echo ${tenant_name} | tr '[:lower:]' '[:upper:]')
    export STAGE_UPPER=$(echo ${stage} | tr '[:lower:]' '[:upper:]')
}

check_dependencies() {
    if [[ " $@ " =~ " --clear " ]]; then
        print_green "✅ Running setup_dependency.sh to initialize the virtual environment..."
        source ./setup_dependency.sh
    else
        print_green "💡 You can run this script with '--clear' to initialize the virtual environment."
        print_green "🔹 Use '--clear' only if you need to set up dependencies for the first time."
    fi
}


build_web_app() {
    # Check if nvm is available
    if command -v nvm &> /dev/null; then
        # Use Node.js 18 or higher
        nvm use 18 || nvm use stable
    fi

    # Install dependencies first
    npm ci
    npm run build
}

