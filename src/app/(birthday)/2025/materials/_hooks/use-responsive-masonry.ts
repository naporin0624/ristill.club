import { useEffect, useState } from "react";

type ResponsiveMasonryConfig = {
	columnWidth: number;
	columnGutter: number;
	rowGutter: number;
};

type BreakpointConfig = {
	[key: string]: ResponsiveMasonryConfig;
};

const breakpointConfigs: BreakpointConfig = {
	mobile: {
		columnWidth: 280,
		columnGutter: 16,
		rowGutter: 16,
	},
	tablet: {
		columnWidth: 300,
		columnGutter: 20,
		rowGutter: 20,
	},
	desktop: {
		columnWidth: 280,
		columnGutter: 24,
		rowGutter: 24,
	},
	largeDesktop: {
		columnWidth: 320,
		columnGutter: 32,
		rowGutter: 32,
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
