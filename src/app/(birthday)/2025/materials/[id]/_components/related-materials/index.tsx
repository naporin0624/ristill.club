"use client";

import { useMemo } from "react";

import { SimpleGrid } from "../../../_components/simple-grid";

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
			if (material && material.id !== currentId) {
				related.push(material);
			}

			// Prevent infinite loop in case there's only one material
			if (i >= totalMaterials) {
				break;
			}
		}

		return related;
	}, [materials, currentId, count]);

	return (
		<section className={styles.root} aria-labelledby="related-materials-heading">
			<h2 id="related-materials-heading" className={styles.title}>
				その他の画像
			</h2>
			<div className={styles.gridContainer}>
				<SimpleGrid materials={relatedMaterials} />
			</div>
		</section>
	);
};
