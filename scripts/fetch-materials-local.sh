#!/bin/bash

# fetch-materials-local.sh
# Script to create materials JSON from local images directory
# Usage: ./scripts/fetch-materials-local.sh

set -euo pipefail

# Configuration
LOCAL_DIR="/mnt/c/Users/napochaan/Pictures/materials"
OUTPUT_FILE="src/app/(birthday)/2025/materials/materials.json"
BASE_URL="https://storage.ristill.club/2025/materials"

# Create output directory if it doesn't exist
mkdir -p "$(dirname "$OUTPUT_FILE")"

echo "Creating materials JSON from local directory: $LOCAL_DIR"

# Check if directory exists
if [ ! -d "$LOCAL_DIR" ]; then
    echo "Error: Directory $LOCAL_DIR does not exist"
    exit 1
fi

# Create JSON array from local files
cd "$LOCAL_DIR"
{
    echo "["
    first=true
    for file in *.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF} 2>/dev/null; do
        # Skip if no files match pattern
        [ -e "$file" ] || continue
        
        # Add comma separator except for first item
        if [ "$first" = true ]; then
            first=false
        else
            echo ","
        fi
        
        # Get file info
        size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null || echo "0")
        modtime=$(stat -f%Sm -t "%Y-%m-%dT%H:%M:%S+09:00" "$file" 2>/dev/null || stat -c "%y" "$file" 2>/dev/null | sed 's/ /T/' | sed 's/\..*+/+/')
        
        # Output JSON object
        printf '  {
    "name": "%s",
    "size": %s,
    "url": "%s/%s",
    "modTime": "%s"
  }' "$file" "$size" "$BASE_URL" "$file" "$modtime"
    done
    echo ""
    echo "]"
} > "$(dirname "$LOCAL_DIR")/$OUTPUT_FILE"

# Move to correct location
mv "$(dirname "$LOCAL_DIR")/$OUTPUT_FILE" "$OUTPUT_FILE"

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

echo "✅ Materials JSON creation completed successfully!"