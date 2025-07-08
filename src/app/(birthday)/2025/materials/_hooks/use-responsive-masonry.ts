import { useEffect, useState } from "react";

type ResponsiveMasonryConfig = {
	columnWidth: number;
	columnGutter: number;
	rowGutter: number;
	itemHeightEstimate: number;
};

type BreakpointConfig = {
	[key: string]: ResponsiveMasonryConfig;
};

// Calculate itemHeightEstimate based on common aspect ratios in materials.json
// Common ratios: 16:9 landscape (0.5625), 9:16 portrait (1.778), and some 16:9 at 1920x1080
// Average height factor is approximately 1.17 for a mixed content
const calculateItemHeightEstimate = (columnWidth: number): number => {
	// Based on analysis of materials.json data:
	// - 50% are 3840x2160 (landscape): height = columnWidth * 0.5625
	// - 40% are 2160x3840 (portrait): height = columnWidth * 1.778
	// - 10% are 1920x1080 (landscape): height = columnWidth * 0.5625
	// Weighted average: (0.6 * 0.5625) + (0.4 * 1.778) = 0.3375 + 0.7112 = 1.0487
	// Add some padding for metadata text (~50px):
	const heightFactor = 1.05;
	const metadataPadding = 50;

	return Math.round(columnWidth * heightFactor + metadataPadding);
};

const breakpointConfigs: BreakpointConfig = {
	mobile: {
		columnWidth: 280,
		columnGutter: 16,
		rowGutter: 16,
		itemHeightEstimate: calculateItemHeightEstimate(280),
	},
	tablet: {
		columnWidth: 280,
		columnGutter: 20,
		rowGutter: 20,
		itemHeightEstimate: calculateItemHeightEstimate(280),
	},
	desktop: {
		columnWidth: 240,
		columnGutter: 24,
		rowGutter: 24,
		itemHeightEstimate: calculateItemHeightEstimate(240),
	},
	largeDesktop: {
		columnWidth: 280,
		columnGutter: 32,
		rowGutter: 32,
		itemHeightEstimate: calculateItemHeightEstimate(280),
	},
};

const getBreakpoint = (width: number): keyof typeof breakpointConfigs => {
	if (width >= 1440) return "largeDesktop";
	if (width >= 1024) return "desktop";
	if (width >= 640) return "tablet";

	return "mobile";
};

export const useResponsiveMasonry = (): ResponsiveMasonryConfig => {
	const [config, setConfig] = useState<ResponsiveMasonryConfig>(() => breakpointConfigs.mobile!);

	useEffect(() => {
		// SSR check: Only run on client side
		if (typeof window === "undefined") return;

		const updateConfig = () => {
			const width = window.innerWidth;
			const breakpoint = getBreakpoint(width);
			const newConfig = breakpointConfigs[breakpoint];
			if (newConfig) {
				setConfig(newConfig);
			}
		};

		updateConfig();
		window.addEventListener("resize", updateConfig);

		return () => {
			window.removeEventListener("resize", updateConfig);
		};
	}, []);

	return config;
};
