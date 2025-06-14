import { style } from "@vanilla-extract/css";

export const root = style({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	minHeight: "100vh",
	padding: "4rem 2rem",
	background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
	color: "white",
	textAlign: "center",
});

export const title = style({
	fontSize: "4rem",
	fontWeight: "bold",
	marginBottom: "1rem",
	textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",

	"@media": {
		"(width < 768px)": {
			fontSize: "2.5rem",
		},
	},
});

export const subtitle = style({
	fontSize: "1.5rem",
	maxWidth: "600px",
	lineHeight: 1.6,
	marginBottom: "2rem",
	opacity: 0.9,

	"@media": {
		"(width < 768px)": {
			fontSize: "1.25rem",
		},
	},
});

export const buttonContainer = style({
	display: "flex",
	gap: "1rem",
	flexWrap: "wrap",
	justifyContent: "center",

	"@media": {
		"(width < 480px)": {
			flexDirection: "column",
			width: "100%",
			maxWidth: "300px",
		},
	},
});
