"use client";

import { useMemo } from "react";
import { WindowVirtualizer } from "virtua";

import { MaterialItem } from "../../../_components/material-item";

import * as styles from "./styles.css";

type MaterialData = {
	id: string;
	displayName: string;
	size: number;
	url: string;
	modTime: string;
	originalName: string;
	width: number;
	height: number;
};

type Props = {
	materials: MaterialData[];
	currentId: string;
	count?: number;
};

export const RelatedMaterials = ({ materials, currentId, count = 25 }: Props) => {
	const relatedMaterials = useMemo(() => {
		// Find current material index
		const currentIndex = materials.findIndex((material) => material.id === currentId);

		if (currentIndex === -1) {
			return materials.slice(0, count);
		}

		// Get consecutive materials starting from the next one, wrapping around if needed
		const related: MaterialData[] = [];
		const totalMaterials = materials.length;

		for (let i = 1; related.length < count; i++) {
			const nextIndex = (currentIndex + i) % totalMaterials;
			const material = materials[nextIndex];

			// Skip the current material
			if (material.id !== currentId) {
				related.push(material);
			}

			// Prevent infinite loop in case there's only one material
			if (i >= totalMaterials) {
				break;
			}
		}

		return related;
	}, [materials, currentId, count]);

	// Create masonry columns with balanced heights
	const gridItems = useMemo(() => {
		const columnCount = 4;
		const columns = Array.from({ length: columnCount }, (_, index) => ({
			id: `column-${index}`,
			items: [] as MaterialData[],
			height: 0, // Track cumulative height
		}));

		// Approximate column width for height calculation (will be adjusted by CSS)
		const approxColumnWidth = 300;

		for (const material of relatedMaterials) {
			// Calculate the height this image would have in the column
			const aspectRatio = material.height / material.width;
			const calculatedHeight = approxColumnWidth * aspectRatio;

			// Find the column with the smallest height
			const shortestColumn = columns.reduce((shortest, column) =>
				column.height < shortest.height ? column : shortest,
			);

			// Add the material to the shortest column
			shortestColumn.items.push(material);
			shortestColumn.height += calculatedHeight + 20; // Add gap size
		}

		return columns;
	}, [relatedMaterials]);

	return (
		<section className={styles.root} aria-labelledby="related-materials-heading">
			<h2 id="related-materials-heading" className={styles.title}>
				その他の画像
			</h2>
			<div className={styles.container}>
				<div className={styles.masonryGrid} role="list" aria-label={`関連する画像 ${relatedMaterials.length}枚`}>
					{gridItems.map((column) => (
						<div key={column.id} className={styles.column}>
							<WindowVirtualizer>
								{column.items.map((material) => (
									<div key={material.id} className={styles.gridItem} role="listitem">
										<MaterialItem material={material} />
									</div>
								))}
							</WindowVirtualizer>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
