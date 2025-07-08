import { style } from "@vanilla-extract/css";

import { breakpoints } from "@themes/styles.css";

export const root = style({
	display: "block",
	background: "#ffffff",
	borderRadius: 12,
	overflow: "hidden",
	boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
	transition: "all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)",
	textDecoration: "none",
	color: "inherit",
	cursor: "pointer",

	selectors: {
		"&:hover": {
			transform: "translateY(-4px)",
			boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
		},
		"&:focus-visible": {
			outline: "none",
			boxShadow: "0 0 0 3px rgba(94, 201, 255, 0.5), 0 8px 32px rgba(0, 0, 0, 0.15)",
			transform: "translateY(-4px)",
		},
		"&:active": {
			transform: "translateY(-2px)",
		},
	},
});

export const imageContainer = style({
	position: "relative",
	overflow: "hidden",
	backgroundColor: "#f5f5f5",
	width: "100%",
});

export const image = style({
	display: "block",
	width: "100%",
	height: "100%",
	objectFit: "cover",
	transition: "transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)",

	selectors: {
		"&:hover": {
			transform: "scale(1.02)",
		},
	},
});

export const metadata = style({
	padding: 8,
	fontSize: "0.75rem",
	color: "#2d2d2d",
	lineHeight: "1.4",

	"@media": {
		[breakpoints.desktop]: {
			padding: 12,
			fontSize: "0.875rem",
		},
	},
});

export const name = style({
	fontWeight: "600",
	color: "#2d2d2d",
	marginBottom: 4,
	overflow: "hidden",
	textOverflow: "ellipsis",
	whiteSpace: "nowrap",
	display: "block",
});

export const size = style({
	fontSize: "0.75rem",
	color: "#2d2d2d",
});
