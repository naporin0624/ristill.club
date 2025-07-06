import { createVar, style } from "@vanilla-extract/css";

import { breakpoints } from "@themes/styles.css";

export const root = style({
	display: "flex",
	flexDirection: "column",
	gap: 16,
	alignItems: "center",
	justifyContent: "center",
});

const borderWidth = createVar();
export const image = style({
	vars: {
		[borderWidth]: "8px",
	},
	transform: "rotate(1deg)",
	border: `${borderWidth} solid #ffffff`,
	boxShadow: "4px 8px 12px 0px rgba(45, 45, 45, 0.20)",
	borderRadius: 4,

	"@media": {
		[breakpoints.desktop]: {
			vars: {
				[borderWidth]: "16px",
			},
		},
	},
});

export const caption = style({
	lineHeight: "1.5em",
});
