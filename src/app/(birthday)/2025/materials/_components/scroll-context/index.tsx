"use client";

import { createContext, useContext, useRef, type ReactNode, type RefObject } from "react";

import type { MaterialsGridHandle } from "../materials-grid";

type ScrollContextType = {
	materialsGridRef: RefObject<MaterialsGridHandle | null>;
};

const ScrollContext = createContext<ScrollContextType | null>(null);

export const useScrollContext = () => {
	const context = useContext(ScrollContext);
	if (!context) {
		throw new Error("useScrollContext must be used within ScrollProvider");
	}

	return context;
};

type Props = {
	children: ReactNode;
};

export const ScrollProvider = ({ children }: Props) => {
	const materialsGridRef = useRef<MaterialsGridHandle>(null);

	return <ScrollContext.Provider value={{ materialsGridRef }}>{children}</ScrollContext.Provider>;
};
