import { style, createContainer } from "@vanilla-extract/css";

export const gridContainer = createContainer();

export const container = style({
	width: "100%",
	containerName: gridContainer,
	containerType: "inline-size",
});

// Pure CSS Pinterest-style masonry layout using CSS Multi-Column
export const masonryGrid = style({
	// CSS Multi-Column Layout (universal browser support)
	columnWidth: "280px", // Mobile: 1-2 columns
	columnGap: "16px",
	padding: "0",
	width: "100%",

	// Container queries using Vanilla Extract syntax
	"@container": {
		[`${gridContainer} (min-width: 640px)`]: {
			columnGap: "20px",
			columnWidth: "300px", // Tablet: 2-3 columns
		},
		[`${gridContainer} (min-width: 1024px)`]: {
			columnGap: "24px",
			columnWidth: "280px", // Desktop: 4 columns (smaller width = more columns)
		},
		[`${gridContainer} (min-width: 1440px)`]: {
			columnGap: "32px",
			columnWidth: "320px", // Large desktop: 4 columns with more spacing
		},
	},
});

// Additional class for grid enhancement (can be combined with masonryGrid)
export const masonryGridLarge = style({});

// Individual item styling
export const gridItem = style({
	// Multi-column layout properties
	breakInside: "avoid", // Prevent items from breaking across columns
	marginBottom: "16px", // Space between items in columns
	width: "100%", // Full width within column

	// Performance optimizations
	contain: "layout paint",
	overflow: "visible", // Allow shadows to show

	// Shadow styling
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

	// Container query responsive spacing
	"@container": {
		[`${gridContainer} (min-width: 640px)`]: {
			marginBottom: "20px",
		},
		[`${gridContainer} (min-width: 1024px)`]: {
			marginBottom: "24px",
		},
		[`${gridContainer} (min-width: 1440px)`]: {
			marginBottom: "32px",
		},
	},
});

// Note: This approach provides:
// 1. Universal browser support via CSS Multi-Column Layout
// 2. Perfect DOM order preservation (accessible and SEO-friendly)
// 3. No JavaScript required (RSC compatible, better performance)
// 4. Container query-based responsive design
// 5. Automatic bottom alignment via natural layout flow
// 6. Future-ready for CSS Grid Masonry enhancement
