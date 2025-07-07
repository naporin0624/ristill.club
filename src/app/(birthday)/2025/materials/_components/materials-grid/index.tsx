"use client";

import { forwardRef, useImperativeHandle, useMemo } from "react";

import { useScrollRestoration } from "../../_hooks/use-scroll-restoration";
import { ColumnVirtualizer } from "../column-virtualizer";

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
};

export type MaterialsGridHandle = {
	scrollToTop: () => void;
};

export const MaterialsGrid = forwardRef<MaterialsGridHandle, Props>(({ materials }, ref) => {
	const { registerVirtualizer, getInitialState, scrollToTop } = useScrollRestoration();

	useImperativeHandle(
		ref,
		() => ({
			scrollToTop,
		}),
		[scrollToTop],
	);

	// Create responsive grid layout data for masonry effect with balanced heights
	const gridItems = useMemo(() => {
		// Responsive column count based on screen size
		// This will be updated based on actual viewport, but start with 4 for SSR
		const columnCount = 4;
		const columns = Array.from({ length: columnCount }, (_, index) => ({
			id: `column-${index}`,
			items: [] as MaterialData[],
			height: 0, // Track cumulative height
		}));

		// Approximate column width for height calculation (will be adjusted by CSS)
		const approxColumnWidth = 300;

		for (const material of materials) {
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
	}, [materials]);

	return (
		<div className={styles.container}>
			<div className={styles.masonryGrid} role="list" aria-label={`モザイクアート素材画像 ${materials.length}枚`}>
				{gridItems.map((column, columnIndex) => {
					const columnId = `column-${columnIndex}`;
					const { initialCache } = getInitialState(columnId, column.items.length);

					return (
						<div key={column.id} className={styles.column}>
							<ColumnVirtualizer
								columnId={columnId}
								items={column.items}
								initialCache={initialCache}
								onRegisterVirtualizer={registerVirtualizer}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
});

MaterialsGrid.displayName = "MaterialsGrid";
