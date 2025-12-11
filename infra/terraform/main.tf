terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 3.74.0"
    }
  }
  
  backend "s3" {
   
  }
}

provider "aws" {
  region  = var.aws_region
  profile = var.aws_profile
}

data "aws_caller_identity" "current" {}

locals {
  lambda_name = "${var.prefix}_playground"
}

locals {
  common_environment_variables = {
    PROJECT_NAME     = var.project_name
    ENVIRONMENT      = var.environment
    AWS_PROFILE      = var.aws_profile
  }
}

variable "tenant_name" {
  description = "The name of the tenant"
  type        = string
  default     = "default"
}

