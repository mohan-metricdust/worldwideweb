variable "project_name" {
  description = "Name of the project"
  type        = string
  default     = "livekit-token"
}

variable "environment" {
  description = "Deployment environment"
  type        = string
}

variable "aws_profile" {
  description = "AWS profile to use"
  type        = string
}

variable "aws_region" {
  description = "AWS region to deploy to"
  type        = string
} 

variable "prefix" {
  description = "Prefix for resource names"
  type        = string
}

variable "image_name_passed_as_parameter" {
  description = "The ECR repository path for the container image"
  type        = string
}

variable "domain_name" {
  description = "Domain name for the deployment"
  type        = string
}

variable "subdomain_name" {
  description = "Subdomain name for the deployment"
  type        = string
}

variable "certificate_arn" {
  description = "ARN of the SSL certificate"
  type        = string
}

variable "certificate_domain_lookup" {
  description = "The domain to be used for certificate lookup"
  type        = string
}

variable "web_app_build_path" {
  description = "The path to the web app build"
  type        = string
}

variable "web_s3_bucket_name" {
  description = "The name of the S3 bucket to store the web app build"
  type        = string
}

variable "profile_aws_name" {
  description = "AWS profile name to use for CLI commands"
  type        = string
}

variable "apex_domain_name" {
  description = "The apex domain name for the deployment"
  type        = string
}

