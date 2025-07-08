import { style, createContainer } from "@vanilla-extract/css";

export const gridContainer = createContainer();

export const container = style({
	width: "100%",
	containerName: gridContainer,
	containerType: "inline-size",
});

// Masonic grid container
export const masonryGrid = style({
	width: "100%",
	height: "100vh", // Full viewport height for virtual scrolling
	overflowY: "auto",
	overflowX: "hidden",
	position: "relative",

	// Smooth scrolling
	scrollBehavior: "smooth",

	// Performance optimizations
	willChange: "scroll-position",
	contain: "layout paint",
});

// Masonic grid container with custom height
export const masonryGridCustom = style({
	width: "100%",
	overflowY: "auto",
	overflowX: "hidden",
	position: "relative",

	// Smooth scrolling
	scrollBehavior: "smooth",

	// Performance optimizations
	willChange: "scroll-position",
	contain: "layout paint",
});

// Individual item styling for masonic grid
export const gridItem = style({
	width: "100%", // Full width within column
	display: "block",

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
});

// Note: This approach provides:
// 1. Universal browser support via CSS Multi-Column Layout
// 2. Perfect DOM order preservation (accessible and SEO-friendly)
// 3. No JavaScript required (RSC compatible, better performance)
// 4. Container query-based responsive design
// 5. Automatic bottom alignment via natural layout flow
// 6. Future-ready for CSS Grid Masonry enhancement
