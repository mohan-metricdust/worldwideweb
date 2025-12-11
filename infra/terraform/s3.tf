resource "aws_s3_bucket" "web_bucket" {
  bucket = var.web_s3_bucket_name
  force_destroy = true

  lifecycle {
    prevent_destroy = true
  }

  tags = {
    Name        = "${var.web_s3_bucket_name}"
    Environment = var.environment
  }
}

resource "aws_s3_bucket_website_configuration" "web_bucket_website" {
  bucket = aws_s3_bucket.web_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_public_access_block" "web_bucket_access" {
  bucket = aws_s3_bucket.web_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "web_bucket_policy" {
  bucket = aws_s3_bucket.web_bucket.id
  depends_on = [aws_s3_bucket_public_access_block.web_bucket_access]

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.web_bucket.arn}/*"
      },
    ]
  })
}

# Upload web app files to S3
resource "null_resource" "web_app_upload" {
  triggers = {
    always_run = "${timestamp()}"
  }

  provisioner "local-exec" {
    command = "aws s3 sync ${var.web_app_build_path} s3://${var.web_s3_bucket_name} --delete --profile ${var.profile_aws_name} --region ${var.aws_region}"
  }

  depends_on = [
    aws_s3_bucket.web_bucket,
    aws_s3_bucket_policy.web_bucket_policy,
    aws_s3_bucket_website_configuration.web_bucket_website
  ]
}

