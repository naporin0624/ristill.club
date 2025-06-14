import { style } from "@vanilla-extract/css";

export const root = style({
	minHeight: "100vh",
	padding: "6rem 3rem",
	background: "#fefdf8",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	position: "relative",
	"@media": {
		"(width >= 1024px)": {
			padding: "8rem 4rem",
		},
		"(width < 768px)": {
			padding: "4rem 2rem",
		},
	},
});

export const title = style({
	fontSize: "2.5rem",
	fontWeight: "300",
	textAlign: "center",
	marginBottom: "5rem",
	color: "#8b7355",
	fontFamily: "serif",
	letterSpacing: "0.1em",
	lineHeight: "1.4",
	"@media": {
		"(width >= 1024px)": {
			fontSize: "3rem",
			marginBottom: "6rem",
		},
		"(width < 768px)": {
			fontSize: "2rem",
			marginBottom: "4rem",
		},
	},
});

export const storyText = style({
	textAlign: "center",
	fontSize: "1.2rem",
	color: "#6b5b47",
	fontStyle: "italic",
	marginBottom: "4rem",
	padding: "0 2rem",
	fontFamily: "serif",
	letterSpacing: "0.02em",
	lineHeight: "1.6",
	"@media": {
		"(width >= 1024px)": {
			fontSize: "1.3rem",
			marginBottom: "5rem",
		},
		"(width < 768px)": {
			fontSize: "1.1rem",
			padding: "0 1rem",
			marginBottom: "3rem",
		},
	},
});

export const mosaicGrid = style({
	display: "grid",
	gridTemplateColumns: "repeat(10, 1fr)",
	gap: "2px",
	maxWidth: "500px",
	width: "100%",
	aspectRatio: "1",
	padding: "2rem",
	background: "rgba(255, 255, 255, 0.7)",
	border: "1px solid rgba(180, 160, 120, 0.3)",
	"@media": {
		"(width >= 1024px)": {
			maxWidth: "600px",
			padding: "2.5rem",
		},
		"(width < 768px)": {
			gridTemplateColumns: "repeat(8, 1fr)",
			maxWidth: "350px",
			padding: "1.5rem",
		},
	},
});

export const mosaicItem = style({
	aspectRatio: "1",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	fontSize: "0.7rem",
	opacity: "0.8",
	"@media": {
		"(width < 768px)": {
			fontSize: "0.6rem",
		},
	},
});

export const counter = style({
	fontSize: "1.4rem",
	fontWeight: "400",
	color: "#8b7355",
	textAlign: "center",
	marginTop: "3rem",
	marginBottom: "4rem",
	background: "rgba(212, 175, 55, 0.1)",
	padding: "2rem 3rem",
	border: "1px solid rgba(212, 175, 55, 0.3)",
	fontFamily: "serif",
	letterSpacing: "0.05em",
	lineHeight: "1.6",
	"@media": {
		"(width >= 1024px)": {
			fontSize: "1.5rem",
			padding: "2.5rem 4rem",
		},
		"(width < 768px)": {
			fontSize: "1.2rem",
			padding: "1.5rem 2rem",
			marginTop: "2rem",
			marginBottom: "3rem",
		},
	},
});

export const collectionStory = style({
	textAlign: "center",
	maxWidth: "700px",
	background: "rgba(255, 255, 255, 0.5)",
	padding: "4rem 3rem",
	border: "1px solid rgba(180, 160, 120, 0.2)",
	"@media": {
		"(width >= 1024px)": {
			maxWidth: "800px",
			padding: "5rem 4rem",
		},
		"(width < 768px)": {
			padding: "3rem 2rem",
		},
	},
});

export const collectionTitle = style({
	fontSize: "1.8rem",
	color: "#8b7355",
	marginBottom: "2rem",
	fontWeight: "400",
	fontFamily: "serif",
	letterSpacing: "0.05em",
	"@media": {
		"(width >= 1024px)": {
			fontSize: "2rem",
		},
		"(width < 768px)": {
			fontSize: "1.6rem",
		},
	},
});

export const collectionText = style({
	fontSize: "1.1rem",
	color: "#6b5b47",
	lineHeight: "1.8",
	fontFamily: "serif",
	letterSpacing: "0.02em",
	"@media": {
		"(width >= 1024px)": {
			fontSize: "1.2rem",
		},
		"(width < 768px)": {
			fontSize: "1rem",
		},
	},
});
