import { style } from "@vanilla-extract/css";

import { breakpoints, maxWidth } from "@themes/styles.css";

export const root = style({
	background: "#5EC9FF",
	minHeight: "100vh",
});

export const screen = style({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	position: "relative",
	background: "#ffffff",
	minHeight: "100vh",
});

export const section = style({
	display: "grid",
	gridTemplateColumns: "repeat(10, 1fr)",
	gridTemplateRows: "repeat(14, 1fr)",
	maxWidth,
	width: "100%",
	padding: `calc(min(100vw, ${maxWidth}) / 10) 0`,
	position: "relative",
	zIndex: 3,

	gridTemplateAreas: `
		". contents contents contents contents contents contents contents contents ."
		". contents contents contents contents contents contents contents contents ."
		". contents contents contents contents contents contents contents contents ."
		". contents contents contents contents contents contents contents contents ."
		". contents contents contents contents contents contents contents contents ."
		". contents contents contents contents contents contents contents contents ."
		". contents contents contents contents contents contents contents contents ."
		". contents contents contents contents contents contents contents contents ."
		". contents contents contents contents contents contents contents contents ."
		". contents contents contents contents contents contents contents contents ."
		". contents contents contents contents contents contents contents contents ."
		". contents contents contents contents contents contents contents contents ."
		". contents contents contents contents contents contents contents contents ."
		". contents contents contents contents contents contents contents contents ."
	`,

	"@media": {
		[breakpoints.desktop]: {
			gridTemplateColumns: "repeat(16, 1fr)",
			gridTemplateRows: "repeat(12, 1fr)",
			gridTemplateAreas: `
				". contents contents contents contents contents contents contents contents contents contents contents contents contents contents ."
				". contents contents contents contents contents contents contents contents contents contents contents contents contents contents ."
				". contents contents contents contents contents contents contents contents contents contents contents contents contents contents ."
				". contents contents contents contents contents contents contents contents contents contents contents contents contents contents ."
				". contents contents contents contents contents contents contents contents contents contents contents contents contents contents ."
				". contents contents contents contents contents contents contents contents contents contents contents contents contents contents ."
				". contents contents contents contents contents contents contents contents contents contents contents contents contents contents ."
				". contents contents contents contents contents contents contents contents contents contents contents contents contents contents ."
				". contents contents contents contents contents contents contents contents contents contents contents contents contents contents ."
				". contents contents contents contents contents contents contents contents contents contents contents contents contents contents ."
				". contents contents contents contents contents contents contents contents contents contents contents contents contents contents ."
				". contents contents contents contents contents contents contents contents contents contents contents contents contents contents ."
			`,
		},
	},
});

export const contents = style({
	position: "relative",
	gridArea: "contents",
	display: "flex",
	flexDirection: "column",
	gap: 32,

	"@media": {
		[breakpoints.desktop]: {
			gap: 48,
		},
	},
});

export const text = style({
	lineHeight: "250%",
	letterSpacing: "0.03em",
	whiteSpace: "pre-wrap",
	// @ts-ignore
	wordBreak: "auto-phrase",
});

export const backLink = style({
	display: "inline-flex",
	alignItems: "center",
	gap: 8,
	padding: "12px 24px",
	backgroundColor: "#5EC9FF",
	color: "#ffffff",
	textDecoration: "none",
	borderRadius: 32,
	fontSize: "0.9rem",
	fontWeight: "600",
	transition: "all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)",
	alignSelf: "flex-start",

	selectors: {
		"&:hover": {
			backgroundColor: "#4BB8F0",
			transform: "translateX(-4px)",
		},
		"&:focus-visible": {
			outline: "none",
			boxShadow: "0 0 0 2px #0070f3",
		},
	},

	"@media": {
		[breakpoints.desktop]: {
			padding: "16px 32px",
			fontSize: "1rem",
		},
	},
});
