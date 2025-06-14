import { style } from "@vanilla-extract/css";

export const root = style({
	minHeight: "100vh",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	textAlign: "center",
	position: "relative",
	// Clean, literary background
	background: "#fefdf8",
	padding: "4rem 2rem",
	"@media": {
		"(width >= 1024px)": {
			padding: "6rem 4rem",
		},
		"(width < 768px)": {
			padding: "3rem 1.5rem",
		},
	},
});

export const title = style({
	fontSize: "3.5rem",
	fontWeight: "300",
	letterSpacing: "0.1em",
	lineHeight: "1.4",
	marginBottom: "3rem",
	// Literary, elegant text
	color: "#8b7355",
	fontFamily: "serif",
	"@media": {
		"(width >= 1024px)": {
			fontSize: "4rem",
			marginBottom: "4rem",
		},
		"(768px <= width < 1024px)": {
			fontSize: "3rem",
			marginBottom: "3.5rem",
		},
		"(width < 768px)": {
			fontSize: "2.5rem",
			marginBottom: "2.5rem",
		},
	},
});

export const subtitle = style({
	fontSize: "2.2rem",
	fontWeight: "400",
	letterSpacing: "0.1em",
	color: "#d4af37",
	marginBottom: "4rem",
	fontFamily: "serif",
	"@media": {
		"(width >= 1024px)": {
			fontSize: "2.8rem",
			marginBottom: "5rem",
		},
		"(768px <= width < 1024px)": {
			fontSize: "2.4rem",
			marginBottom: "4.5rem",
		},
		"(width < 768px)": {
			fontSize: "2rem",
			marginBottom: "3rem",
		},
	},
});

export const emoji = style({
	fontSize: "2rem",
	margin: "3rem 0",
	display: "flex",
	gap: "2rem",
	justifyContent: "center",
	alignItems: "center",
	opacity: 0.8,
	"@media": {
		"(width >= 1024px)": {
			fontSize: "2.5rem",
			gap: "3rem",
			margin: "4rem 0",
		},
		"(768px <= width < 1024px)": {
			fontSize: "2.2rem",
			gap: "2.5rem",
			margin: "3.5rem 0",
		},
		"(width < 768px)": {
			fontSize: "1.8rem",
			gap: "1.5rem",
			margin: "2.5rem 0",
		},
	},
});

export const welcomeMessage = style({
	fontSize: "1.1rem",
	color: "#a0956b",
	fontWeight: "300",
	letterSpacing: "0.05em",
	lineHeight: "1.8",
	marginTop: "2rem",
	fontFamily: "serif",
	fontStyle: "italic",
	"@media": {
		"(width >= 1024px)": {
			fontSize: "1.3rem",
			marginTop: "3rem",
		},
		"(768px <= width < 1024px)": {
			fontSize: "1.2rem",
			marginTop: "2.5rem",
		},
		"(width < 768px)": {
			fontSize: "1rem",
			marginTop: "2rem",
		},
	},
});

// Main content container with literary spacing
export const celebrationRoot = style({
	position: "relative",
	zIndex: 2,
	maxWidth: "700px",
	margin: "0 auto",
	padding: "4rem 3rem",
	background: "rgba(255, 255, 255, 0.7)",
	border: "1px solid rgba(180, 160, 120, 0.2)",
	"@media": {
		"(width >= 1024px)": {
			maxWidth: "800px",
			padding: "6rem 4rem",
		},
		"(768px <= width < 1024px)": {
			padding: "5rem 3.5rem",
		},
		"(width < 768px)": {
			padding: "3rem 2rem",
		},
	},
});
