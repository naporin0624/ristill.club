#!/bin/bash

# fetch-materials.sh
# Script to fetch materials images from S3 and convert to JSON format
# Usage: ./scripts/fetch-materials.sh

set -euo pipefail

# Configuration
S3_REMOTE="s3_ristill:ristill/2025/materials"
OUTPUT_FILE="src/app/(birthday)/2025/materials/materials.json"
BASE_URL="https://storage.ristill.club/2025/materials"

# Create output directory if it doesn't exist
mkdir -p "$(dirname "$OUTPUT_FILE")"

echo "Fetching materials from S3..."

# Get list of images with details
rclone lsjson "$S3_REMOTE" --recursive | jq -r '
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

echo "Materials data saved to $OUTPUT_FILE"
echo "Found $(jq 'length' "$OUTPUT_FILE") images"

# Display summary
echo "Summary:"
jq -r '
  group_by(.name | split(".") | last | ascii_downcase) |
  map({
    extension: (.[0].name | split(".") | last | ascii_downcase),
    count: length
  }) |
  sort_by(.extension) |
  map("  " + .extension + ": " + (.count | tostring) + " files") |
  join("\n")
' "$OUTPUT_FILE"

echo "✅ Materials fetching completed successfully!"