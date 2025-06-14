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

export const messageRoot = style({
	maxWidth: "800px",
	width: "100%",
	background: "rgba(255, 255, 255, 0.6)",
	padding: "5rem 4rem",
	border: "1px solid rgba(180, 160, 120, 0.2)",
	"@media": {
		"(width >= 1024px)": {
			maxWidth: "900px",
			padding: "6rem 5rem",
		},
		"(width < 768px)": {
			padding: "3rem 2rem",
		},
	},
});

export const coreMessage = style({
	textAlign: "center",
	marginBottom: "4rem",
	"@media": {
		"(width >= 1024px)": {
			marginBottom: "5rem",
		},
		"(width < 768px)": {
			marginBottom: "3rem",
		},
	},
});

export const coreMessageTitle = style({
	fontSize: "2rem",
	fontWeight: "400",
	color: "#8b7355",
	marginBottom: "2rem",
	fontFamily: "serif",
	letterSpacing: "0.05em",
	lineHeight: "1.4",
	"@media": {
		"(width >= 1024px)": {
			fontSize: "2.3rem",
		},
		"(width < 768px)": {
			fontSize: "1.7rem",
		},
	},
});

export const heartDecoration = style({
	fontSize: "1.5rem",
	letterSpacing: "2rem",
	opacity: 0.6,
	color: "#d4af37",
});

export const letterContent = style({
	lineHeight: "1.8",
	fontSize: "1.2rem",
	color: "#6b5b47",
	marginBottom: "3rem",
	fontFamily: "serif",
	letterSpacing: "0.02em",
	"@media": {
		"(width >= 1024px)": {
			fontSize: "1.3rem",
		},
		"(width < 768px)": {
			fontSize: "1.1rem",
		},
	},
});

export const letterParagraph = style({
	marginBottom: "2.5rem",
	textAlign: "center",
	"@media": {
		"(width >= 1024px)": {
			marginBottom: "3rem",
		},
		"(width < 768px)": {
			marginBottom: "2rem",
		},
	},
});

export const expandButton = style({
	background: "rgba(212, 175, 55, 0.1)",
	color: "#8b7355",
	border: "1px solid rgba(212, 175, 55, 0.3)",
	padding: "1.5rem 3rem",
	fontSize: "1.1rem",
	fontWeight: "400",
	cursor: "pointer",
	margin: "2rem auto",
	display: "block",
	fontFamily: "serif",
	letterSpacing: "0.05em",
	":hover": {
		background: "rgba(212, 175, 55, 0.2)",
	},
	"@media": {
		"(width >= 1024px)": {
			fontSize: "1.2rem",
			padding: "2rem 4rem",
		},
		"(width < 768px)": {
			fontSize: "1rem",
			padding: "1.2rem 2rem",
		},
	},
});

export const signature = style({
	textAlign: "center",
	marginTop: "4rem",
	paddingTop: "3rem",
	borderTop: "1px solid rgba(212, 175, 55, 0.3)",
	"@media": {
		"(width >= 1024px)": {
			marginTop: "5rem",
			paddingTop: "4rem",
		},
		"(width < 768px)": {
			marginTop: "3rem",
			paddingTop: "2rem",
		},
	},
});

export const signatureParagraph = style({
	fontSize: "1.1rem",
	color: "#6b5b47",
	marginBottom: "1rem",
	fontStyle: "italic",
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

export const signatureDecoration = style({
	fontSize: "1.3rem",
	marginTop: "2rem",
	letterSpacing: "2rem",
	opacity: 0.6,
	color: "#d4af37",
});

export const futureWish = style({
	background: "rgba(212, 175, 55, 0.05)",
	padding: "4rem 3rem",
	marginTop: "4rem",
	textAlign: "center",
	border: "1px solid rgba(212, 175, 55, 0.2)",
	"@media": {
		"(width >= 1024px)": {
			padding: "5rem 4rem",
			marginTop: "5rem",
		},
		"(width < 768px)": {
			padding: "3rem 2rem",
			marginTop: "3rem",
		},
	},
});

export const futureWishTitle = style({
	fontSize: "1.6rem",
	color: "#8b7355",
	marginBottom: "2rem",
	fontWeight: "400",
	fontFamily: "serif",
	letterSpacing: "0.05em",
	"@media": {
		"(width >= 1024px)": {
			fontSize: "1.8rem",
		},
		"(width < 768px)": {
			fontSize: "1.4rem",
		},
	},
});

export const futureWishParagraph = style({
	fontSize: "1.1rem",
	color: "#6b5b47",
	lineHeight: "1.8",
	marginBottom: "2rem",
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

export const wishDecoration = style({
	fontSize: "1.4rem",
	fontWeight: "400",
	color: "#8b7355",
	marginTop: "2rem",
	fontFamily: "serif",
	letterSpacing: "0.1em",
});
