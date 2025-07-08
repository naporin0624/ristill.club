"use client";

import dynamic from "next/dynamic";
import { forwardRef, useCallback, useImperativeHandle, type ComponentType } from "react";

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
};

export type MaterialsGridHandle = {
	scrollToTop: () => void;
};

export const MaterialsGrid = forwardRef<MaterialsGridHandle, Props>(({ materials }, ref) => {
	const { handleRender, scrollToTop, scrollToIndex } = useMasonicScrollRestoration();
	const { columnWidth, columnGutter, rowGutter } = useResponsiveMasonry();

	useImperativeHandle(
		ref,
		() => ({
			scrollToTop,
		}),
		[scrollToTop],
	);

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

	return (
		<div className={styles.container}>
			<Masonry
				items={materials}
				columnWidth={columnWidth}
				columnGutter={columnGutter}
				rowGutter={rowGutter}
				overscanBy={2}
				className={styles.masonryGrid}
				role="list"
				aria-label={`モザイクアート素材画像 ${materials.length}枚`}
				onRender={handleRender}
				scrollToIndex={scrollToIndex}
				render={renderItem}
			/>
		</div>
	);
});

MaterialsGrid.displayName = "MaterialsGrid";
