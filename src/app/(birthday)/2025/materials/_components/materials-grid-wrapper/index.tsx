"use client";

import { useState, useEffect } from "react";

import { MaterialsGrid } from "../materials-grid";
import { useScrollContext } from "../scroll-context";

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

export const MaterialsGridWrapper = ({ materials }: Props) => {
	const { materialsGridRef } = useScrollContext();
	const [isInitializing, setIsInitializing] = useState(true);

	// Show initial loading state briefly to prevent white flash during restoration
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsInitializing(false);
		}, 100); // Very brief delay to allow positioner cache restoration

		return () => clearTimeout(timer);
	}, []);

	// Show loading state during initial mount to prevent white flash
	if (isInitializing) {
		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					minHeight: "200px",
					opacity: 0.8,
				}}
			>
				<div style={{ fontSize: "14px", color: "#666" }}>画像レイアウトを準備中...</div>
			</div>
		);
	}

	return <MaterialsGrid ref={materialsGridRef} materials={materials} />;
};
