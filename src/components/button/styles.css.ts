import { style } from "@vanilla-extract/css";

const buttonBase = style({
	padding: "12px 24px",
	border: "none",
	borderRadius: "8px",
	fontSize: "16px",
	fontWeight: "600",
	cursor: "pointer",
	transition: "all 0.2s ease-in-out",
	selectors: {
		"&:hover": {
			transform: "translateY(-1px)",
			boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
		},
		"&:disabled": {
			opacity: 0.6,
			cursor: "not-allowed",
			transform: "none",
			boxShadow: "none",
		},
	},
});

export const primary = style([
	buttonBase,
	{
		backgroundColor: "#0070f3",
		color: "white",
		selectors: {
			"&:hover": {
				backgroundColor: "#0056b3",
			},
		},
	},
]);

export const secondary = style([
	buttonBase,
	{
		backgroundColor: "#f4f4f4",
		color: "#333",
		border: "1px solid #ddd",
		selectors: {
			"&:hover": {
				backgroundColor: "#e8e8e8",
			},
		},
	},
]);
