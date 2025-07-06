import { style } from "@vanilla-extract/css";

import { breakpoints, focusRing } from "@themes/styles.css";

export const root = style({});

export const screen = style({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	position: "relative",
	minHeight: "100svh",
	background: "#5EC9FF",
});

export const content = style({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	gap: 24,
	textAlign: "center",
	padding: "32px",
	maxWidth: "800px",
	width: "100%",

	"@media": {
		[breakpoints.desktop]: {
			gap: 32,
			padding: "48px",
		},
	},
});

export const title = style({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	gap: 12,
	fontSize: 48,
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
			gap: 16,
			fontSize: 80,
		},
	},
});

export const message = style({
	lineHeight: "200%",
	letterSpacing: "0.03em",
	fontSize: "1rem",
	color: "#ffffff",
	textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
	textAlign: "center",

	"@media": {
		[breakpoints.desktop]: {
			fontSize: "1.2rem",
			lineHeight: "220%",
		},
	},
});

export const actions = style({
	display: "flex",
	flexDirection: "column",
	gap: 12,
	alignItems: "center",
	justifyContent: "center",

	"@media": {
		[breakpoints.desktop]: {
			flexDirection: "row",
			gap: 20,
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
		fontSize: "0.9rem",
		fontWeight: "600",
		textDecoration: "none",
		border: "2px solid transparent",
		cursor: "pointer",
		transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
		position: "relative",
		overflow: "hidden",
		minWidth: "200px",
		fontFamily: "ads-rumba, sans-serif",
		textTransform: "uppercase",
		letterSpacing: "0.02em",
		backdropFilter: "blur(20px)",

		"@media": {
			[breakpoints.desktop]: {
				padding: "20px 40px",
				fontSize: "1.1rem",
				minWidth: "280px",
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
			"&::after": {
				content: '""',
				position: "absolute",
				top: "50%",
				right: "20px",
				transform: "translateY(-50%)",
				width: "12px",
				height: "12px",
				background: "currentColor",
				clipPath: "polygon(0 0, 100% 50%, 0 100%)",
				transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
				opacity: 0.7,

				"@media": {
					[breakpoints.desktop]: {
						width: "14px",
						height: "14px",
						right: "24px",
					},
				},
			},
			"&:hover::after": {
				transform: "translateY(-50%) translateX(4px)",
				opacity: 1,
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
				borderColor: "rgba(255, 215, 127, 0.5)",
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
				borderColor: "rgba(255, 215, 127, 0.5)",
			},
			"&:active": {
				transform: "translateY(-2px) scale(1.01)",
				transition: "all 0.1s ease-out",
			},
		},
	},
]);
