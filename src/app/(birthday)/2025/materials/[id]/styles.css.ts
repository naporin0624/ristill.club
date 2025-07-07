import { style } from "@vanilla-extract/css";

import { breakpoints, maxWidth, focusRing } from "@themes/styles.css";

export const root = style({
	minHeight: "100vh",
	background: "#f8f9fa",
});

export const container = style({
	maxWidth,
	margin: "0 auto",
	padding: "16px",

	"@media": {
		[breakpoints.desktop]: {
			padding: "24px",
		},
	},
});

export const header = style({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	marginBottom: 24,
	flexWrap: "wrap",
	gap: 16,

	"@media": {
		[breakpoints.desktop]: {
			marginBottom: 32,
		},
	},
});

export const backButton = style([
	focusRing,
	{
		display: "inline-flex",
		alignItems: "center",
		gap: 8,
		padding: "12px 20px",
		backgroundColor: "#5EC9FF",
		color: "#ffffff",
		textDecoration: "none",
		borderRadius: 24,
		fontSize: "0.9rem",
		fontWeight: "600",
		transition: "all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)",

		selectors: {
			"&:hover": {
				backgroundColor: "#4BB8F0",
				transform: "translateX(-2px)",
			},
		},

		"@media": {
			[breakpoints.desktop]: {
				padding: "14px 24px",
				fontSize: "1rem",
			},
		},
	},
]);

export const navigation = style({
	display: "flex",
	gap: 12,
});

export const navButton = style([
	focusRing,
	{
		display: "inline-flex",
		alignItems: "center",
		padding: "10px 16px",
		backgroundColor: "#ffffff",
		color: "#333",
		textDecoration: "none",
		borderRadius: 20,
		fontSize: "0.875rem",
		fontWeight: "500",
		border: "2px solid #e1e1e1",
		transition: "all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)",

		selectors: {
			"&:hover": {
				backgroundColor: "#5EC9FF",
				color: "#ffffff",
				borderColor: "#5EC9FF",
				transform: "translateY(-2px)",
			},
		},

		"@media": {
			[breakpoints.desktop]: {
				padding: "12px 20px",
				fontSize: "0.9rem",
			},
		},
	},
]);

export const main = style({
	display: "grid",
	gap: 24,
	gridTemplateColumns: "1fr",

	"@media": {
		[breakpoints.desktop]: {
			gridTemplateColumns: "2fr 1fr",
			gap: 48,
		},
	},
});

export const imageSection = style({
	order: 1,

	"@media": {
		[breakpoints.desktop]: {
			order: 0,
		},
	},
});

export const imageContainer = style({
	position: "relative",
	backgroundColor: "#ffffff",
	borderRadius: 16,
	overflow: "hidden",
	boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
	aspectRatio: "auto",
});

export const image = style({
	width: "100%",
	height: "auto",
	display: "block",
	maxHeight: "85vh",
	objectFit: "contain",
});

export const sidebar = style({
	order: 0,
	display: "flex",
	flexDirection: "column",
	gap: 24,

	"@media": {
		[breakpoints.desktop]: {
			order: 1,
			position: "sticky",
			top: 24,
			alignSelf: "flex-start",
		},
	},
});

export const imageInfo = style({
	backgroundColor: "#ffffff",
	padding: 24,
	borderRadius: 16,
	boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
});

export const metadataList = style({
	display: "flex",
	flexDirection: "column",
	gap: 16,
	marginTop: 20,
});

export const metadataItem = style({
	display: "grid",
	gridTemplateColumns: "1fr 1fr",
	gap: 8,
	fontSize: "0.875rem",

	"@media": {
		[breakpoints.desktop]: {
			gridTemplateColumns: "2fr 3fr",
		},
	},
});

export const shortcuts = style({
	backgroundColor: "#ffffff",
	padding: 20,
	borderRadius: 16,
	boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
});

export const shortcutsTitle = style({
	fontSize: "1rem",
	fontWeight: "600",
	color: "#333",
	marginBottom: 16,
});

export const shortcutsList = style({
	display: "flex",
	flexDirection: "column",
	gap: 8,
});

export const shortcutItem = style({
	display: "grid",
	gridTemplateColumns: "1fr 3fr",
	gap: 12,
	fontSize: "0.875rem",
	alignItems: "center",
});

export const shortcutKey = style({
	fontFamily: "monospace",
	backgroundColor: "#f1f3f4",
	padding: "4px 8px",
	borderRadius: 4,
	fontSize: "0.75rem",
	textAlign: "center",
	fontWeight: "600",
});

export const shortcutDescription = style({
	color: "#666",
});
