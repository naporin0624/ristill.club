"use client";

import dynamic from "next/dynamic";
import { forwardRef, useCallback, useImperativeHandle, useRef, useEffect, type ComponentType } from "react";

import { useMasonicScrollRestoration } from "../../_hooks/use-masonic-scroll-restoration";
import { useResponsiveMasonry } from "../../_hooks/use-responsive-masonry";
import { MaterialItem } from "../material-item";

import * as styles from "./styles.css";

import type { MasonryProps } from "masonic";

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

// Dynamic import for Masonry to avoid SSR issues with ResizeObserver
const Masonry = dynamic(() => import("masonic").then((mod) => mod.Masonry), { ssr: false }) as ComponentType<
	MasonryProps<MaterialData>
>;

type Props = {
	materials: MaterialData[];
	height?: string;
};

export type MaterialsGridHandle = {
	scrollToTop: () => void;
};

export const MaterialsGrid = forwardRef<MaterialsGridHandle, Props>(({ materials, height }, ref) => {
	const { handleRender, scrollToTop, scrollToIndex, savePositionerCache, restorePositionerCache } =
		useMasonicScrollRestoration();
	const { columnWidth, columnGutter, rowGutter, itemHeightEstimate } = useResponsiveMasonry();
	const positionerRef = useRef<unknown>(null);

	useImperativeHandle(
		ref,
		() => ({
			scrollToTop,
		}),
		[scrollToTop],
	);

	// Initialize positioner cache on mount
	useEffect(() => {
		if (positionerRef.current !== null) {
			restorePositionerCache(positionerRef.current);
			savePositionerCache(positionerRef.current);
		}
	}, [restorePositionerCache, savePositionerCache]);

	// Save positioner cache when component unmounts or materials change
	useEffect(() => {
		return () => {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			const currentPositioner = positionerRef.current;
			if (currentPositioner !== null) {
				savePositionerCache(currentPositioner);
			}
		};
	}, [savePositionerCache]);

	const renderItem = useCallback(
		({ data: material, width, index }: { data: MaterialData; width: number; index: number }) => (
			<div
				key={material.id}
				className={styles.gridItem}
				role="listitem"
				aria-setsize={materials.length}
				aria-posinset={index + 1}
				style={{ width }}
			>
				<MaterialItem material={material} />
			</div>
		),
		[materials.length],
	);

	const gridHeight = height !== undefined && height !== "auto" ? height : "100vh";
	const useCustomStyle = height !== undefined;
	
	return (
		<div className={styles.container}>
			<Masonry
				items={materials}
				columnWidth={columnWidth}
				columnGutter={columnGutter}
				rowGutter={rowGutter}
				itemHeightEstimate={itemHeightEstimate}
				overscanBy={1} // Reduced from 2 to 1 for better performance
				className={useCustomStyle ? styles.masonryGridCustom : styles.masonryGrid}
				style={useCustomStyle ? { height: gridHeight } : undefined}
				role="list"
				aria-label={`モザイクアート素材画像 ${materials.length}枚`}
				onRender={handleRender}
				scrollToIndex={scrollToIndex}
				render={renderItem}
				resizeObserver={undefined} // Disable ResizeObserver since we have pre-calculated dimensions
			/>
		</div>
	);
});

MaterialsGrid.displayName = "MaterialsGrid";
