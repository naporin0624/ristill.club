import { globalStyle, style } from "@vanilla-extract/css";

import { breakpoints, linkWithFocusRing } from "@themes/styles.css";

export const main = style({
	minHeight: "100svh",
	width: "100%",
});

globalStyle(main, {
	color: "#2d2d2d",
	background: "#ffffff",
	fontSize: 14,
	lineHeight: "125%",
	fontFamily: "var(--noto-sans-jp)",
	fontWeight: 500,
	letterSpacing: "0.03em",

	// @ts-ignore
	wordBreak: "auto-phrase",

	"@media": {
		[breakpoints.desktop]: {
			fontSize: 20,
		},
	},
});

export const footer = style({
	width: "100%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	background: "#ffffff",
	padding: 8,
	textTransform: "uppercase",

	"@media": {
		[breakpoints.desktop]: {
			padding: 16,
		},
	},
});

export const copyright = style([
	linkWithFocusRing,
	{
		color: "#2d2d2d",
		fontWeight: 500,
	},
]);

export const bubbleRoot = style({
	zIndex: 2,
});
