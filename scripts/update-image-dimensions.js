#!/usr/bin/env node

import fs from "fs";
import path from "path";
import https from "https";
import http from "http";
import sizeOf from "image-size";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const MATERIALS_JSON_PATH = path.join(__dirname, "../src/app/(birthday)/2025/materials/materials.json");
const CONCURRENT_REQUESTS = 20; // Number of concurrent requests
const TIMEOUT = 30000; // 30 seconds timeout per request

/**
 * Fetch image dimensions from URL
 * @param {string} url - Image URL
 * @returns {Promise<{width: number, height: number}>}
 */
async function getImageDimensions(url) {
	return new Promise((resolve, reject) => {
		const client = url.startsWith("https:") ? https : http;
		const timeout = setTimeout(() => {
			reject(new Error(`Timeout fetching ${url}`));
		}, TIMEOUT);

		const req = client.get(url, (res) => {
			clearTimeout(timeout);

			if (res.statusCode !== 200) {
				reject(new Error(`HTTP ${res.statusCode} for ${url}`));
				return;
			}

			const chunks = [];
			let totalLength = 0;

			res.on("data", (chunk) => {
				chunks.push(chunk);
				totalLength += chunk.length;

				// Try to get dimensions early if we have enough data
				if (totalLength > 1024) {
					try {
						const buffer = Buffer.concat(chunks);
						const dimensions = sizeOf(buffer);
						if (dimensions.width && dimensions.height) {
							res.destroy(); // Stop downloading
							resolve({
								width: dimensions.width,
								height: dimensions.height,
							});
							return;
						}
					} catch (err) {
						// Continue downloading if we can't parse yet
					}
				}
			});

			res.on("end", () => {
				try {
					const buffer = Buffer.concat(chunks);
					const dimensions = sizeOf(buffer);
					resolve({
						width: dimensions.width,
						height: dimensions.height,
					});
				} catch (err) {
					reject(new Error(`Failed to parse image dimensions for ${url}: ${err.message}`));
				}
			});

			res.on("error", (err) => {
				clearTimeout(timeout);
				reject(new Error(`Request error for ${url}: ${err.message}`));
			});
		});

		req.on("error", (err) => {
			clearTimeout(timeout);
			reject(new Error(`Request error for ${url}: ${err.message}`));
		});

		req.setTimeout(TIMEOUT, () => {
			req.destroy();
			reject(new Error(`Timeout fetching ${url}`));
		});
	});
}

/**
 * Process items in batches with concurrency control
 * @param {Array} items - Array of items to process
 * @param {Function} processor - Function to process each item
 * @param {number} concurrency - Number of concurrent operations
 * @returns {Promise<Array>} - Array of results
 */
async function processInBatches(items, processor, concurrency) {
	const results = new Array(items.length);

	for (let i = 0; i < items.length; i += concurrency) {
		const batch = items.slice(i, i + concurrency);
		const batchPromises = batch.map((item, batchIndex) => {
			const actualIndex = i + batchIndex;
			return processor(item, actualIndex)
				.then((result) => {
					results[actualIndex] = result;
					console.log(`Processed ${actualIndex + 1}/${items.length}: ${item.id}`);
					return result;
				})
				.catch((error) => {
					console.error(`Error processing ${item.id}:`, error.message);
					results[actualIndex] = { error: error.message };
					return { error: error.message };
				});
		});

		await Promise.all(batchPromises);
		console.log(`Completed batch ${Math.floor(i / concurrency) + 1}/${Math.ceil(items.length / concurrency)}`);
	}

	return results;
}

/**
 * Main function to update materials.json with image dimensions
 */
async function main() {
	try {
		console.log("Reading materials.json...");
		const materialsData = JSON.parse(fs.readFileSync(MATERIALS_JSON_PATH, "utf8"));

		console.log(`Found ${materialsData.length} materials to process`);

		// Process all materials
		const results = await processInBatches(
			materialsData,
			async (material, index) => {
				try {
					const dimensions = await getImageDimensions(material.url);
					return {
						...material,
						width: dimensions.width,
						height: dimensions.height,
					};
				} catch (error) {
					console.error(`Failed to get dimensions for ${material.id} (${material.url}):`, error.message);
					return {
						...material,
						width: null,
						height: null,
						dimensionError: error.message,
					};
				}
			},
			CONCURRENT_REQUESTS,
		);

		// Filter out failed results and create updated data
		const updatedMaterials = results.filter((result) => result && !result.error);
		const failedCount = results.length - updatedMaterials.length;

		console.log(`Successfully processed ${updatedMaterials.length} materials`);
		if (failedCount > 0) {
			console.log(`Failed to process ${failedCount} materials`);
		}

		// Write updated data back to file
		console.log("Writing updated materials.json...");
		fs.writeFileSync(MATERIALS_JSON_PATH, JSON.stringify(updatedMaterials, null, "\t"));

		console.log("✅ Successfully updated materials.json with image dimensions");

		// Print summary
		const withDimensions = updatedMaterials.filter((m) => m.width && m.height).length;
		const withoutDimensions = updatedMaterials.filter((m) => !m.width || !m.height).length;

		console.log(`\nSummary:`);
		console.log(`- Total materials: ${updatedMaterials.length}`);
		console.log(`- With dimensions: ${withDimensions}`);
		console.log(`- Without dimensions: ${withoutDimensions}`);
	} catch (error) {
		console.error("❌ Error:", error.message);
		process.exit(1);
	}
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
	main().catch(console.error);
}

export { main, getImageDimensions };
