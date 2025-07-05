import { createVar, style, keyframes } from "@vanilla-extract/css";

import { breakpoints, maxWidth } from "@themes/styles.css";
import { calc } from "@vanilla-extract/css-utils"

const waveFlow = keyframes({
	"0%": { maskPosition: "10% center" },
	"100%": { maskPosition: "90% center" },
});

const waveFlow2 = keyframes({
	"0%": { maskPosition: "20% center" },
	"100%": { maskPosition: "100% center" },
});

const waveFlow3 = keyframes({
	"0%": { maskPosition: "20% center" },
	"100%": { maskPosition: "80% center" },
});

export const root = style({});

const waveHeight = createVar()

export const screen = style({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	position: "relative",

	selectors: {
		"&:first-child, &:nth-child(2n)": {
			background: "#5EC9FF",
		},
		"&:not(&:first-child):not(&:nth-child(2))::before": {
			vars: {
				[waveHeight]: "100px",
			},
			content: "\"\"",
			position: "absolute",
			height: waveHeight,
			width: "100%",
			top: calc.multiply(calc.divide(calc.negate(waveHeight), 6), 2),
			left: 0,
			zIndex: 1,
			mask: "url(\"/2025/wave.sp.svg\")",
			maskRepeat: "repeat-x",
			maskPosition: "10% center",

			"@media": {
				[breakpoints.desktop]: {
					vars: {
						[waveHeight]: "195px",
					},
					maskSize: "50% 100%",
					top: calc.multiply(calc.divide(calc.negate(waveHeight), 5), 2),
					mask: "url(\"/2025/wave.pc.svg\")",
				}
			}
		},
		"&:nth-child(2n + 1):not(&:first-child):not(&:nth-child(2))::before": {
			backgroundColor: "#ffffff",
		},
		"&:nth-child(2n):not(&:first-child):not(&:nth-child(2))::before": {
			backgroundColor: "#5EC9FF",
		},
		"&:nth-child(3)::before": {
			animation: `${waveFlow} 240s linear infinite`,
			animationDelay: "0s",
		},
		"&:nth-child(4)::before": {
			animation: `${waveFlow2} 320s linear infinite`,
			animationDelay: "-80s",
		},
		"&:nth-child(5)::before": {
			animation: `${waveFlow3} 180s linear infinite`,
			animationDelay: "-60s",
		},
	}
});

const gridColumns = createVar();
const gridRows = createVar();

const gridLayout = style({
	vars: {
		[gridColumns]: "10",
		[gridRows]: "14",
	},
	display: "grid",
	gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
	gridTemplateRows: `repeat(${gridRows}, 1fr)`,
	maxWidth,

	"@media": {
		[breakpoints.desktop]: {
			vars: {
				[gridColumns]: "16",
				[gridRows]: "12",
			},
		},
	},
});

export const welcome = style([
	gridLayout,
	{
		height: "100svh",
		width: "100%",

		gridTemplateAreas: `
		". . . . . . . . . ."
		". . . . . . . . . ."
		". . . . . . . . . ."
		". . . . . . . . . ."
		". . . . . . . . . ."
		". . . . . . . . . ."
		". . . . . . . . . ."
		". . . . . . . . . ."
		". . . . . . . . . ."
		". title title title title title title title title ."
		". title title title title title title title title ."
		". title title title title title title title title ."
		". title title title title title title title title ."
		". . . . . . . . . ."
	`,

		"@media": {
			[breakpoints.desktop]: {
				gridTemplateAreas: `
				". . . . . . . . . . . . . . . ."
				". title title title title title title title title title title . . . . ."
				". title title title title title title title title title title . . . . ."
				". title title title title title title title title title title . . . . ."
				". title title title title title title title title title title . . . . ."
				". . . . . . . . . . . . . . . ."
				". . . . . . . . . . . . . . . ."
				". . . . . . . . . . . . . . . ."
				". . . . . . . . . . . . . . . ."
				". . . . . . . . . . . . . . . ."
				". . . . . . . . . . . . . . . ."
				". . . . . . . . . . . . . . . ."
			`,
			},
		},
	},
]);

export const title = style({
	gridArea: "title",
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	justifyContent: "flex-end",
	gap: 16,
	fontSize: 48,
	lineHeight: "1em",
	letterSpacing: "-0.04em",
	color: "#ffffff",
	WebkitTextStrokeColor: "#5EC9FF",
	// WebkitTextStrokeWidth: 8,
	whiteSpace: "pre-wrap",
	textTransform: "uppercase",
	fontFamily: "ads-rumba, sans-serif",
	// @ts-ignore
	wordBreak: "auto-phrase",

	"@media": {
		[breakpoints.desktop]: {
			gap: 24,
			fontSize: 96,
			justifyContent: "flex-start",
		},
	},
});

export const section = style([
	gridLayout,
	{
		width: "100%",
		padding: `calc(min(100vw, ${maxWidth}) / ${gridColumns}) 0`,

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
	},
]);

export const contents = style({
	position: "relative",
	zIndex: 2,
	gridArea: "contents",

	display: "flex",
	flexDirection: "column",
	gap: 24,

	"@media": {
		[breakpoints.desktop]: {
			gap: 32,
		},
	},
});

export const text = style({
	lineHeight: "250%",
	letterSpacing: "0.03em",
	whiteSpace: "pre-wrap",

	selectors: {
		"&[data-bold]": {
			fontSize: "1.8em",
			fontWeight: "700",
		},
		"&[data-small]": {
			//
		}
	},
});

export const subSection = style({
	display: "flex",
	flexDirection: "column",
	gap: 16,

	"@media": {
		[breakpoints.desktop]: {
			gap: 24,
		}
	}
})

export const contributors = style({
	display: "flex",
	flexWrap: "wrap",
	gap: 8,

	"@media": {
		[breakpoints.mobile]: {
			flexDirection: "column",
		},
		[breakpoints.tablet]: {
			//
		},
		[breakpoints.desktop]: {
			gap: 16,
		}
	}
})

export const contributor = style([text, {
	lineHeight: "1.6em",
}])
