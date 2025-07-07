#!/usr/bin/env node

// anonymize-materials.js
// Script to anonymize materials.json by removing identifying information
// and adding sequential IDs for privacy protection

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFile = path.join(__dirname, "..", "src", "app", "(birthday)", "2025", "materials", "materials.json");
const outputFile = inputFile; // Overwrite the same file

console.log("Reading materials data...");
const materialsData = JSON.parse(fs.readFileSync(inputFile, "utf8"));

console.log(`Processing ${materialsData.length} materials...`);

// Create anonymized version with sequential IDs
const anonymizedMaterials = materialsData.map((material, index) => {
	const id = String(index + 1).padStart(4, "0"); // e.g., "0001", "0002"
	const fileExtension = path.extname(material.name);

	return {
		id,
		// Remove identifying filename, just use sequential number
		displayName: `材料画像 ${index + 1}`,
		size: material.size,
		url: material.url,
		modTime: material.modTime,
		// Keep original name for URL purposes but don't expose it in UI
		originalName: material.name,
	};
});

console.log("Writing anonymized materials data...");
fs.writeFileSync(outputFile, JSON.stringify(anonymizedMaterials, null, "\t"));

console.log(`✅ Successfully anonymized ${materialsData.length} materials`);
console.log("Sample output:");
console.log(JSON.stringify(anonymizedMaterials.slice(0, 2), null, 2));
