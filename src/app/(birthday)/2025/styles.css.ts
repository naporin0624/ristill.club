import { createVar, style, keyframes } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { breakpoints, maxWidth, focusRing, linkWithFocusRing } from "@themes/styles.css";

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

const gridColumns = createVar();
const gridRows = createVar();

export const root = style({
	vars: {
		[gridColumns]: "10",
		[gridRows]: "14",
	},
	"@media": {
		[breakpoints.desktop]: {
			vars: {
				[gridColumns]: "16",
				[gridRows]: "12",
			},
		},
	},
});

const waveHeight = createVar();

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
			content: '""',
			position: "absolute",
			height: waveHeight,
			width: "100%",
			top: calc.multiply(calc.divide(calc.negate(waveHeight), 6), 2),
			left: 0,
			mask: 'url("/2025/wave.sp.svg")',
			maskRepeat: "repeat-x",
			maskPosition: "10% center",

			"@media": {
				[breakpoints.desktop]: {
					vars: {
						[waveHeight]: "195px",
					},
					maskSize: "50% 100%",
					top: calc.multiply(calc.divide(calc.negate(waveHeight), 5), 2),
					mask: 'url("/2025/wave.pc.svg")',
				},
			},
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
	},
});

const gridLayout = style({
	display: "grid",
	gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
	gridTemplateRows: `repeat(${gridRows}, 1fr)`,
	maxWidth,
	position: "relative",
	zIndex: 3,
});

export const welcome = style([
	gridLayout,
	{
		height: "100svh",
		width: "100%",
		position: "relative",

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
	textShadow: `
		-8px -8px 0 #5EC9FF,
		-8px 8px 0 #5EC9FF,
		8px -8px 0 #5EC9FF,
		8px 8px 0 #5EC9FF,
		-8px 0 0 #5EC9FF,
		8px 0 0 #5EC9FF,
		0 -8px 0 #5EC9FF,
		0 8px 0 #5EC9FF
	`,
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

export const decoration = style({
	top: 0,
	left: "50%",
	transform: "translateX(-50%)",
	position: "absolute",
	width: "100%",
	maxWidth: 1440,
	height: "100%",
	pointerEvents: "none",
	zIndex: 3,
});

const kvMaxWidth = createVar();

export const kv = style({
	display: "block",
	position: "absolute",
	width: "100%",
	maxInlineSize: "revert",

	"@media": {
		[breakpoints.mobile]: {
			top: calc.divide("100vh", gridRows),
			width: "130%",
			height: "auto",
			left: "50%",
			transform: "translateX(-50%)",
		},
		[breakpoints.tablet]: {
			vars: {
				[kvMaxWidth]: "725px",
			},
			top: calc.divide("100vh", gridRows),
			right: 0,
		},
		[breakpoints.desktop]: {
			vars: {
				[kvMaxWidth]: "1045px",
			},
			top: -65,
			right: calc.divide("100vw", gridColumns),
			width: `min(1045px, ${calc.subtract("100vw", calc.multiply(calc.divide("100vw", gridColumns), 2))})`,
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
		},
	},
});

export const subSection = style({
	display: "flex",
	flexDirection: "column",
	gap: 16,

	"@media": {
		[breakpoints.desktop]: {
			gap: 24,
		},
	},
});

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
		},
	},
});

export const contributor = style([
	text,
	{
		lineHeight: "1.6em",
	},
]);

export const joinButton = style([
	focusRing,
	{
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		padding: "20px 40px",
		borderRadius: "64px",
		background: "linear-gradient(135deg, #FFD77F 0%, #FFE196 100%)",
		color: "#2d2d2d",
		fontSize: "1.1rem",
		fontWeight: "600",
		textDecoration: "none",
		border: "2px solid transparent",
		cursor: "pointer",
		transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
		boxShadow: `
		0 8px 32px rgba(255, 215, 127, 0.3),
		0 4px 16px rgba(94, 201, 255, 0.2),
		inset 0 1px 0 rgba(255, 255, 255, 0.4)
	`,
		position: "relative",
		overflow: "hidden",
		minWidth: "240px",
		fontFamily: "ads-rumba, sans-serif",
		textTransform: "uppercase",
		letterSpacing: "0.02em",
		backdropFilter: "blur(20px)",

		"@media": {
			[breakpoints.desktop]: {
				padding: "24px 48px",
				fontSize: "1.3rem",
				minWidth: "320px",
			},
		},

		selectors: {
			"&:hover": {
				background: "linear-gradient(135deg, #5EC9FF 0%, #7DD3FF 100%)",
				color: "#ffffff",
				transform: "translateY(-4px) scale(1.02)",
				boxShadow: `
				0 16px 48px rgba(94, 201, 255, 0.4),
				0 8px 24px rgba(255, 215, 127, 0.3),
				inset 0 1px 0 rgba(255, 255, 255, 0.6)
			`,
				borderColor: "rgba(255, 215, 127, 0.5)",
			},
			"&:active": {
				transform: "translateY(-2px) scale(1.01)",
				transition: "all 0.1s ease-out",
			},
			"&::before": {
				content: '""',
				position: "absolute",
				top: 0,
				left: "-120%",
				width: "100%",
				height: "100%",
				background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",
				transition: "left 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)",
			},
			"&:hover::before": {
				left: "120%",
			},
			"&::after": {
				content: '""',
				position: "absolute",
				top: "50%",
				right: "24px",
				transform: "translateY(-50%)",
				width: "16px",
				height: "16px",
				background: "currentColor",
				clipPath: "polygon(0 0, 100% 50%, 0 100%)",
				transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
				opacity: 0.7,
			},
			"&:hover::after": {
				transform: "translateY(-50%) translateX(4px)",
				opacity: 1,
			},
		},
	},
]);

export const contributorLink = style([
	linkWithFocusRing,
	{
		color: "inherit",
	},
]);

export const profileLink = style([
	linkWithFocusRing,
	{
		color: "inherit",
	},
]);
