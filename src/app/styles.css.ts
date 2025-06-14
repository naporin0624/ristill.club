import { style } from "@vanilla-extract/css";

export const root = style({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	minHeight: "100vh",
	padding: "2rem",
	backgroundColor: "#f9fafb",
});

export const title = style({
	fontSize: "3rem",
	fontWeight: "bold",
	color: "#1f2937",
	marginBottom: "1rem",
	textAlign: "center",
});

export const description = style({
	fontSize: "1.25rem",
	color: "#6b7280",
	textAlign: "center",
	maxWidth: "600px",
	lineHeight: 1.6,
});
