import { style } from "@vanilla-extract/css";

export const root = style({
	minHeight: "100vh",
	backgroundColor: "#f8f6f3",
	background: `
		radial-gradient(ellipse at top left, rgba(255, 248, 220, 0.4) 0%, transparent 60%),
		radial-gradient(ellipse at top right, rgba(240, 248, 255, 0.3) 0%, transparent 60%),
		radial-gradient(ellipse at bottom left, rgba(245, 245, 220, 0.3) 0%, transparent 50%),
		radial-gradient(ellipse at bottom right, rgba(230, 243, 255, 0.3) 0%, transparent 50%),
		repeating-linear-gradient(
			0deg,
			transparent 0px,
			transparent 39px,
			rgba(200, 180, 120, 0.01) 40px,
			rgba(200, 180, 120, 0.01) 41px
		),
		repeating-linear-gradient(
			90deg,
			transparent 0px,
			transparent 39px,
			rgba(120, 180, 200, 0.01) 40px,
			rgba(120, 180, 200, 0.01) 41px
		)
	`,
	fontFamily: "'Inter', 'Segoe UI', sans-serif",
	padding: "4rem 2rem",

	"@media": {
		"(width < 768px)": {
			padding: "2rem 1rem",
		},
	},
});

export const singleFrameLayout = style({
	maxWidth: "1200px",
	margin: "0 auto",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	minHeight: "calc(100vh - 8rem)",

	"@media": {
		"(width < 768px)": {
			minHeight: "calc(100vh - 4rem)",
		},
	},
});

export const mainFrame = style({
	width: "100%",
	maxWidth: "900px",
});
