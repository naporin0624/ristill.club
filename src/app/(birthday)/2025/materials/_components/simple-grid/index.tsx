"use client";

import { useResponsiveMasonry } from "../../_hooks/use-responsive-masonry";
import { MaterialItem } from "../material-item";

import * as styles from "./styles.css";

import type { CSSProperties } from "react";

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

export const SimpleGrid = ({ materials }: Props) => {
	const { columnWidth, columnGutter } = useResponsiveMasonry();

	return (
		<div
			className={styles.container}
			style={
				{
					"--column-width": `${columnWidth}px`,
					"--column-gap": `${columnGutter}px`,
				} as CSSProperties
			}
		>
			<div className={styles.grid} role="list" aria-label={`モザイクアート素材画像 ${materials.length}枚`}>
				{materials.map((material, index) => (
					<div
						key={material.id}
						className={styles.gridItem}
						role="listitem"
						aria-setsize={materials.length}
						aria-posinset={index + 1}
					>
						<MaterialItem material={material} />
					</div>
				))}
			</div>
		</div>
	);
};
