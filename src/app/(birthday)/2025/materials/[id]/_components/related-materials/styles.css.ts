import { style } from "@vanilla-extract/css";

import { breakpoints } from "@themes/styles.css";

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
});

export const masonryGrid = style({
	display: "grid",
	gridTemplateColumns: "repeat(2, 1fr)",
	gap: 16,
	width: "100%",

	"@media": {
		[breakpoints.tablet]: {
			gridTemplateColumns: "repeat(3, 1fr)",
			gap: 20,
		},
		[breakpoints.desktop]: {
			gridTemplateColumns: "repeat(4, 1fr)",
			gap: 24,
		},
	},
});

export const column = style({
	display: "flex",
	flexDirection: "column",
});

export const gridItem = style({
	marginBottom: 16,
	breakInside: "avoid",

	"@media": {
		[breakpoints.tablet]: {
			marginBottom: 20,
		},
		[breakpoints.desktop]: {
			marginBottom: 24,
		},
	},
});
