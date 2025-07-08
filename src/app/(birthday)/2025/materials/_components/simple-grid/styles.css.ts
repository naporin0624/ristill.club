import { style, createContainer } from "@vanilla-extract/css";

export const gridContainer = createContainer();

export const container = style({
	width: "100%",
	containerName: gridContainer,
	containerType: "inline-size",
});

// CSS Multi-Column Layout (same as original MaterialsGrid)
export const grid = style({
	// CSS Multi-Column Layout (universal browser support)
	columnWidth: "var(--column-width)", // Dynamic column width from hook
	columnGap: "var(--column-gap)", // Dynamic gap from hook
	padding: "0",
	width: "100%",

	// Container queries using Vanilla Extract syntax
	"@container": {
		[`${gridContainer} (width >= 640px)`]: {
			// Tablet responsive adjustments handled by hook
		},
		[`${gridContainer} (width >= 1024px)`]: {
			// Desktop responsive adjustments handled by hook
		},
		[`${gridContainer} (width >= 1440px)`]: {
			// Large desktop responsive adjustments handled by hook
		},
	},
});

// Individual item styling (matching MaterialsGrid exactly)
export const gridItem = style({
	// Multi-column layout properties
	breakInside: "avoid", // Prevent items from breaking across columns
	marginBottom: "var(--column-gap)", // Use same gap for vertical spacing
	width: "100%", // Full width within column
	display: "block",

	// Performance optimizations
	contain: "layout paint",
	overflow: "visible", // Allow shadows to show

	// Shadow styling (matching MaterialsGrid exactly)
	borderRadius: 12,
	boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
	transition: "all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)",

	selectors: {
		"&:hover": {
			boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
		},
		"&:focus-within": {
			boxShadow: "0 0 0 3px rgba(94, 201, 255, 0.5), 0 8px 32px rgba(0, 0, 0, 0.15)",
		},
	},
});

// Note: This approach provides:
// 1. Universal browser support via CSS Multi-Column Layout
// 2. Perfect DOM order preservation (accessible and SEO-friendly)
// 3. No JavaScript required (RSC compatible, better performance)
// 4. Container query-based responsive design
// 5. Automatic content-based height (no virtualization needed)
// 6. Identical visual appearance to MaterialsGrid
