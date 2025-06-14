import { style } from "@vanilla-extract/css";

export const root = style({
	minHeight: "100vh",
	padding: "6rem 3rem",
	background: "#fefdf8",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
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

export const content = style({
	display: "flex",
	flexDirection: "column",
	gap: "4rem",
	maxWidth: "800px",
	width: "100%",
	"@media": {
		"(width >= 1024px)": {
			gap: "5rem",
			maxWidth: "900px",
		},
		"(width < 768px)": {
			gap: "3rem",
		},
	},
});

export const card = style({
	background: "rgba(255, 255, 255, 0.6)",
	padding: "3rem",
	border: "1px solid rgba(180, 160, 120, 0.2)",
	textAlign: "center",
	"@media": {
		"(width >= 1024px)": {
			padding: "4rem",
		},
		"(width < 768px)": {
			padding: "2.5rem",
		},
	},
});

export const cardTitle = style({
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

export const cardText = style({
	fontSize: "1.1rem",
	color: "#6b5b47",
	lineHeight: "1.8",
	marginBottom: "3rem",
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

export const avatarPlaceholder = style({
	fontSize: "3rem",
	opacity: 0.4,
	color: "#d4af37",
});

export const charmList = style({
	background: "rgba(255, 255, 255, 0.4)",
	padding: "3rem",
	border: "1px solid rgba(180, 160, 120, 0.2)",
	"@media": {
		"(width >= 1024px)": {
			padding: "4rem",
		},
		"(width < 768px)": {
			padding: "2.5rem",
		},
	},
});

export const listTitle = style({
	fontSize: "1.8rem",
	color: "#8b7355",
	marginBottom: "2.5rem",
	textAlign: "center",
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

export const charmItem = style({
	padding: "1.5rem 2rem",
	marginBottom: "1.5rem",
	background: "rgba(255, 255, 255, 0.6)",
	fontSize: "1rem",
	color: "#6b5b47",
	border: "1px solid rgba(212, 175, 55, 0.2)",
	lineHeight: "1.6",
	fontFamily: "serif",
	letterSpacing: "0.02em",
	"@media": {
		"(width >= 1024px)": {
			fontSize: "1.1rem",
			padding: "1.8rem 2.5rem",
		},
		"(width < 768px)": {
			fontSize: "0.95rem",
			padding: "1.2rem 1.5rem",
		},
	},
});

export const quoteCard = style({
	background: "rgba(212, 175, 55, 0.1)",
	padding: "3rem",
	marginTop: "3rem",
	textAlign: "center",
	border: "1px solid rgba(212, 175, 55, 0.3)",
	"@media": {
		"(width >= 1024px)": {
			padding: "4rem",
		},
		"(width < 768px)": {
			padding: "2.5rem",
		},
	},
});

export const quoteText = style({
	fontSize: "1.3rem",
	fontStyle: "italic",
	marginBottom: "1.5rem",
	color: "#8b7355",
	lineHeight: "1.6",
	fontFamily: "serif",
	letterSpacing: "0.02em",
	"@media": {
		"(width >= 1024px)": {
			fontSize: "1.4rem",
		},
		"(width < 768px)": {
			fontSize: "1.2rem",
		},
	},
});

export const quoteAuthor = style({
	fontSize: "1rem",
	color: "#a0956b",
	fontFamily: "serif",
	letterSpacing: "0.05em",
	"@media": {
		"(width >= 1024px)": {
			fontSize: "1.1rem",
		},
		"(width < 768px)": {
			fontSize: "0.9rem",
		},
	},
});
