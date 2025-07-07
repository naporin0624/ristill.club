"use client";

import { useCallback } from "react";

import { FloatingTopButton } from "@components/floating-top-button";

import { useScrollContext } from "../scroll-context";

export const FloatingTopButtonWrapper = () => {
	const { materialsGridRef } = useScrollContext();

	const handleScrollToTop = useCallback(() => {
		materialsGridRef.current?.scrollToTop();
	}, [materialsGridRef]);

	return <FloatingTopButton onScrollToTop={handleScrollToTop} />;
};
