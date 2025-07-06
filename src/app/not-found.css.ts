import { createVar, style, keyframes } from "@vanilla-extract/css";

import { breakpoints, maxWidth, focusRing } from "@themes/styles.css";

const fadeIn = keyframes({
	"0%": { opacity: 0, transform: "translateY(20px)" },
	"100%": { opacity: 1, transform: "translateY(0)" },
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

export const screen = style({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	position: "relative",
	minHeight: "100svh",
	background: "linear-gradient(135deg, #5EC9FF 0%, #7DD3FF 50%, #FFD77F 100%)",
});

const gridLayout = style({
	display: "grid",
	gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
	gridTemplateRows: `repeat(${gridRows}, 1fr)`,
	maxWidth,
	position: "relative",
	zIndex: 3,
});

export const content = style([
	gridLayout,
	{
		width: "100%",
		height: "100svh",
		animation: `${fadeIn} 0.8s ease-out`,

		gridTemplateAreas: `
		". . . . . . . . . ."
		". . . . . . . . . ."
		". . . . . . . . . ."
		". title title title title title title title title ."
		". title title title title title title title title ."
		". message message message message message message message message ."
		". message message message message message message message message ."
		". actions actions actions actions actions actions actions actions ."
		". actions actions actions actions actions actions actions actions ."
		". . . . . . . . . ."
		". . . . . . . . . ."
		". . . . . . . . . ."
		". . . . . . . . . ."
		". . . . . . . . . ."
	`,

		"@media": {
			[breakpoints.desktop]: {
				gridTemplateAreas: `
				". . . . . . . . . . . . . . . ."
				". . . . . . . . . . . . . . . ."
				". . . . . . . . . . . . . . . ."
				". title title title title title title title title title title . . . . ."
				". title title title title title title title title title title . . . . ."
				". message message message message message message message message message message . . . . ."
				". actions actions actions actions actions actions actions actions actions actions . . . . ."
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
	alignItems: "center",
	justifyContent: "center",
	gap: 16,
	fontSize: 64,
	lineHeight: "1em",
	letterSpacing: "-0.04em",
	color: "#ffffff",
	textShadow: `
		-8px -8px 0 #FFD77F,
		-8px 8px 0 #FFD77F,
		8px -8px 0 #FFD77F,
		8px 8px 0 #FFD77F,
		-8px 0 0 #FFD77F,
		8px 0 0 #FFD77F,
		0 -8px 0 #FFD77F,
		0 8px 0 #FFD77F
	`,
	whiteSpace: "pre-wrap",
	textTransform: "uppercase",
	fontFamily: "ads-rumba, sans-serif",
	// @ts-ignore
	wordBreak: "auto-phrase",
	textAlign: "center",

	"@media": {
		[breakpoints.desktop]: {
			gap: 24,
			fontSize: 120,
		},
	},
});

export const message = style({
	gridArea: "message",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	fontSize: "1.2rem",
	lineHeight: "1.8",
	color: "#ffffff",
	textAlign: "center",
	fontWeight: "500",

	"@media": {
		[breakpoints.desktop]: {
			fontSize: "1.5rem",
		},
	},
});

export const actions = style({
	gridArea: "actions",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	gap: 16,

	"@media": {
		[breakpoints.desktop]: {
			flexDirection: "row",
			gap: 24,
		},
	},
});

const buttonBase = style([
	focusRing,
	{
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		padding: "16px 32px",
		borderRadius: "64px",
		fontSize: "1rem",
		fontWeight: "600",
		textDecoration: "none",
		border: "2px solid transparent",
		cursor: "pointer",
		transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
		position: "relative",
		overflow: "hidden",
		minWidth: "200px",
		textAlign: "center",

		"@media": {
			[breakpoints.desktop]: {
				padding: "20px 40px",
				fontSize: "1.1rem",
				minWidth: "240px",
			},
		},

		selectors: {
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
		},
	},
]);

export const homeButton = style([
	buttonBase,
	{
		background: "linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)",
		color: "#2d2d2d",
		boxShadow: `
		0 8px 32px rgba(255, 255, 255, 0.3),
		0 4px 16px rgba(94, 201, 255, 0.2),
		inset 0 1px 0 rgba(255, 255, 255, 0.8)
	`,

		selectors: {
			"&:hover": {
				background: "linear-gradient(135deg, #FFD77F 0%, #FFE196 100%)",
				transform: "translateY(-4px) scale(1.02)",
				boxShadow: `
				0 16px 48px rgba(255, 215, 127, 0.4),
				0 8px 24px rgba(255, 255, 255, 0.3),
				inset 0 1px 0 rgba(255, 255, 255, 0.6)
			`,
			},
			"&:active": {
				transform: "translateY(-2px) scale(1.01)",
				transition: "all 0.1s ease-out",
			},
		},
	},
]);

export const birthdayButton = style([
	buttonBase,
	{
		background: "linear-gradient(135deg, #FFD77F 0%, #FFE196 100%)",
		color: "#2d2d2d",
		boxShadow: `
		0 8px 32px rgba(255, 215, 127, 0.3),
		0 4px 16px rgba(94, 201, 255, 0.2),
		inset 0 1px 0 rgba(255, 255, 255, 0.4)
	`,

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
			},
			"&:active": {
				transform: "translateY(-2px) scale(1.01)",
				transition: "all 0.1s ease-out",
			},
		},
	},
]);
