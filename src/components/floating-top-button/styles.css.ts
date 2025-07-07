import { style } from "@vanilla-extract/css";

export const root = style({
	position: "fixed",
	bottom: "2rem",
	right: "2rem",
	width: "3rem",
	height: "3rem",
	backgroundColor: "rgba(0, 0, 0, 0.8)",
	color: "white",
	border: "none",
	borderRadius: "50%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	cursor: "pointer",
	zIndex: 1000,
	boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
	backdropFilter: "blur(10px)",

	// Animation properties
	opacity: 0,
	visibility: "hidden",
	transform: "translateY(20px) scale(0.8)",
	transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",

	selectors: {
		"&[data-visible='true']": {
			opacity: 1,
			visibility: "visible",
			transform: "translateY(0) scale(1)",
		},
		"&:hover": {
			backgroundColor: "rgba(0, 0, 0, 0.9)",
			transform: "translateY(-2px) scale(1.05)",
			boxShadow: "0 6px 16px rgba(0, 0, 0, 0.2)",
		},
		"&[data-visible='true']:hover": {
			transform: "translateY(-2px) scale(1.05)",
		},
		"&:active": {
			transform: "translateY(0) scale(0.95)",
		},
		"&[data-visible='true']:active": {
			transform: "translateY(0) scale(0.95)",
		},
	},

	"@media": {
		"(width >= 768px)": {
			width: "3.5rem",
			height: "3.5rem",
		},
	},
});

export const icon = style({
	width: "1.5rem",
	height: "1.5rem",

	"@media": {
		"(width >= 768px)": {
			width: "1.75rem",
			height: "1.75rem",
		},
	},
});
