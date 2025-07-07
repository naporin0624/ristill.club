#!/bin/bash

# fetch-materials-sample.sh
# Script to fetch a sample of materials images from S3 for development
# Usage: ./scripts/fetch-materials-sample.sh

set -euo pipefail

# Configuration
S3_REMOTE="s3_ristill:ristill/2025/materials"
OUTPUT_FILE="src/app/(birthday)/2025/materials/materials.json"
BASE_URL="https://storage.ristill.club/2025/materials"

# Create output directory if it doesn't exist
mkdir -p "$(dirname "$OUTPUT_FILE")"

echo "Fetching sample materials from S3..."

# Get first 50 images for development
rclone lsjson "$S3_REMOTE" --recursive | head -50 | jq '
  map(
    select(.IsDir == false and (.Name | test("\\.(jpg|jpeg|png|webp|avif)$"; "i"))) |
    {
      name: .Name,
      size: .Size,
      url: ("'"$BASE_URL"'/" + .Name),
      modTime: .ModTime
    }
  ) | sort_by(.name)
' > "$OUTPUT_FILE"

echo "Sample materials data saved to $OUTPUT_FILE"
echo "Found $(jq 'length' "$OUTPUT_FILE") images"

echo "✅ Sample materials fetching completed successfully!"