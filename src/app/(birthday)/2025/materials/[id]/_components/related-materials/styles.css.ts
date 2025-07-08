import { style, createContainer } from "@vanilla-extract/css";

export const relatedContainer = createContainer();

export const root = style({
	marginTop: "3rem",
	paddingTop: "2rem",
	borderTop: "1px solid #e0e0e0",
});

export const title = style({
	fontSize: "1.5rem",
	fontWeight: "600",
	marginBottom: "1.5rem",
	color: "#2d2d2d",
	textAlign: "center",
});

export const container = style({
	width: "100%",
	containerName: relatedContainer,
	containerType: "inline-size",
});

// Pure CSS Pinterest-style masonry layout for related materials
export const masonryGrid = style({
	// CSS Multi-Column Layout (universal browser support)
	columnWidth: "240px", // Mobile: 1-2 columns (smaller for related section)
	columnGap: "16px",
	padding: "0",
	width: "100%",

	// Container queries using Vanilla Extract syntax
	"@container": {
		[`${relatedContainer} (min-width: 640px)`]: {
			columnGap: "20px",
			columnWidth: "280px", // Tablet: 2-3 columns
		},
		[`${relatedContainer} (min-width: 1024px)`]: {
			columnGap: "24px",
			columnWidth: "300px", // Desktop: 3-4 columns
		},
		[`${relatedContainer} (min-width: 1440px)`]: {
			columnGap: "32px",
			columnWidth: "320px", // Large desktop: optimize spacing
		},
	},
});

// Additional class for grid enhancement (can be combined with masonryGrid)
export const masonryGridLarge = style({});

// Individual item styling for related materials
export const gridItem = style({
	// Multi-column layout properties
	breakInside: "avoid", // Prevent items from breaking across columns
	marginBottom: "16px", // Space between items in columns
	width: "100%", // Full width within column

	// Performance optimizations
	contain: "layout paint",
	overflow: "hidden",

	// Container query responsive spacing
	"@container": {
		[`${relatedContainer} (min-width: 640px)`]: {
			marginBottom: "20px",
		},
		[`${relatedContainer} (min-width: 1024px)`]: {
			marginBottom: "24px",
		},
		[`${relatedContainer} (min-width: 1440px)`]: {
			marginBottom: "32px",
		},
	},
});

// Note: This pure CSS approach ensures:
// 1. Perfect order preservation for related materials navigation
// 2. Container query-based responsive design
// 3. Progressive enhancement for future browsers
// 4. No JavaScript required (better performance)
// 5. Consistent with main materials grid
