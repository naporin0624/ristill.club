import { style } from "@vanilla-extract/css";

import { breakpoints } from "@themes/styles.css";

export const root = style({
	display: "grid",
	gridTemplateColumns: "8px 1fr",
	gap: 8,
	lineHeight: "125%",
	letterSpacing: "-0.1em",
	textTransform: "uppercase",
	fontFamily: "ads-rumba, sans-serif",
	fontWeight: 400,
	fontStyle: "normal",
	// @ts-ignore
	wordBreak: "auto-phrase",

	":before": {
		content: "",
		display: "block",
		height: "100%",
		width: 8,
		background: "#FFD77F",
	},

	"@media": {
		[breakpoints.desktop]: {
			gap: 12,
		},
	},
	selectors: {
		'&[data-heading-level="1"]': {
			//
		},
		'&[data-heading-level="2"]': {
			fontSize: 32,
			"@media": {
				[breakpoints.desktop]: {
					fontSize: 56,
				},
			},
		},
		'&[data-heading-level="3"]': {
			fontSize: 24,
			"@media": {
				[breakpoints.desktop]: {
					fontSize: 48,
				},
			},
		},
	},
});
