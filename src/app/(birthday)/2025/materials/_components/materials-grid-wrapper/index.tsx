"use client";

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

	return <MaterialsGrid ref={materialsGridRef} materials={materials} />;
};
