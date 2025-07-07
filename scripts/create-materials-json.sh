#!/bin/bash

# create-materials-json.sh
# Script to create materials JSON from local images directory
# Usage: ./scripts/create-materials-json.sh

set -euo pipefail

# Configuration
LOCAL_DIR="/mnt/c/Users/napochaan/Pictures/materials"
OUTPUT_FILE="src/app/(birthday)/2025/materials/materials.json"
BASE_URL="https://storage.ristill.club/2025/materials"
LIMIT=100  # Limit for development/testing

# Create output directory if it doesn't exist
mkdir -p "$(dirname "$OUTPUT_FILE")"

echo "Creating materials JSON from local directory: $LOCAL_DIR"
echo "Processing first $LIMIT images..."

# Check if directory exists
if [ ! -d "$LOCAL_DIR" ]; then
    echo "Error: Directory $LOCAL_DIR does not exist"
    exit 1
fi

# Create JSON using find and limited results
find "$LOCAL_DIR" -maxdepth 1 \( -name "*.png" -o -name "*.webp" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.PNG" -o -name "*.WEBP" -o -name "*.JPG" -o -name "*.JPEG" \) | head -$LIMIT | sort | (
    echo "["
    first=true
    while IFS= read -r filepath; do
        [ -e "$filepath" ] || continue
        
        filename=$(basename "$filepath")
        
        # Add comma separator except for first item
        if [ "$first" = true ]; then
            first=false
        else
            echo ","
        fi
        
        # Get file info (using stat with fallbacks for different systems)
        if stat -f%z "$filepath" >/dev/null 2>&1; then
            # macOS/BSD stat
            size=$(stat -f%z "$filepath")
            modtime=$(stat -f%Sm -t "%Y-%m-%dT%H:%M:%S+09:00" "$filepath")
        else
            # Linux stat
            size=$(stat -c%s "$filepath")
            modtime=$(stat -c "%y" "$filepath" | sed 's/ /T/' | sed 's/\.[0-9]*//')
        fi
        
        # Output JSON object (properly escaped)
        printf '  {
    "name": "%s",
    "size": %s,
    "url": "%s/%s",
    "modTime": "%s"
  }' "$filename" "$size" "$BASE_URL" "$filename" "$modtime"
    done
    echo ""
    echo "]"
) > "$OUTPUT_FILE"

echo "Materials data saved to $OUTPUT_FILE"

# Validate JSON and show info
if command -v jq >/dev/null 2>&1; then
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
else
    echo "jq not available, skipping validation"
    wc -l "$OUTPUT_FILE"
fi

echo "✅ Materials JSON creation completed successfully!"