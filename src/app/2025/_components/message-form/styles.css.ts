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

export const formRoot = style({
	maxWidth: "700px",
	width: "100%",
	background: "rgba(255, 255, 255, 0.6)",
	padding: "4rem 3rem",
	border: "1px solid rgba(180, 160, 120, 0.2)",
	marginBottom: "4rem",
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

export const inputRoot = style({
	position: "relative",
	marginBottom: "3rem",
});

export const textarea = style({
	width: "100%",
	padding: "2rem",
	border: "1px solid rgba(180, 160, 120, 0.3)",
	fontSize: "1.1rem",
	lineHeight: "1.8",
	resize: "none",
	outline: "none",
	fontFamily: "serif",
	letterSpacing: "0.02em",
	backgroundColor: "rgba(255, 255, 255, 0.8)",
	color: "#6b5b47",
	":focus": {
		borderColor: "rgba(212, 175, 55, 0.5)",
	},
	"::placeholder": {
		color: "#a0956b",
		fontStyle: "italic",
	},
	"@media": {
		"(width >= 1024px)": {
			fontSize: "1.2rem",
			padding: "2.5rem",
		},
		"(width < 768px)": {
			fontSize: "1rem",
			padding: "1.5rem",
		},
	},
});

export const charCount = style({
	position: "absolute",
	bottom: "1rem",
	right: "1.5rem",
	fontSize: "0.9rem",
	color: "#a0956b",
	background: "rgba(255, 255, 255, 0.9)",
	padding: "0.5rem 1rem",
	fontFamily: "serif",
	letterSpacing: "0.02em",
});

export const submitButton = style({
	width: "100%",
	padding: "2rem 3rem",
	background: "rgba(212, 175, 55, 0.1)",
	color: "#8b7355",
	border: "1px solid rgba(212, 175, 55, 0.3)",
	fontSize: "1.2rem",
	fontWeight: "400",
	cursor: "pointer",
	fontFamily: "serif",
	letterSpacing: "0.05em",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	gap: "1rem",
	":hover": {
		background: "rgba(212, 175, 55, 0.2)",
	},
	":disabled": {
		opacity: 0.6,
		cursor: "not-allowed",
	},
	"@media": {
		"(width >= 1024px)": {
			fontSize: "1.3rem",
			padding: "2.5rem 4rem",
		},
		"(width < 768px)": {
			fontSize: "1.1rem",
			padding: "1.5rem 2rem",
		},
	},
});

export const loadingSpinner = style({
	fontSize: "1.2rem",
});

export const counterRoot = style({
	textAlign: "center",
	fontSize: "1.3rem",
	fontWeight: "400",
	color: "#8b7355",
	background: "rgba(212, 175, 55, 0.1)",
	padding: "2rem 3rem",
	border: "1px solid rgba(212, 175, 55, 0.3)",
	marginBottom: "4rem",
	fontFamily: "serif",
	letterSpacing: "0.05em",
	"@media": {
		"(width >= 1024px)": {
			fontSize: "1.4rem",
			padding: "2.5rem 4rem",
		},
		"(width < 768px)": {
			fontSize: "1.2rem",
			padding: "1.5rem 2rem",
		},
	},
});

export const messageWall = style({
	maxWidth: "800px",
	width: "100%",
	background: "rgba(255, 255, 255, 0.5)",
	padding: "4rem 3rem",
	border: "1px solid rgba(180, 160, 120, 0.2)",
	"@media": {
		"(width >= 1024px)": {
			maxWidth: "900px",
			padding: "5rem 4rem",
		},
		"(width < 768px)": {
			padding: "3rem 2rem",
		},
	},
});

export const messageWallTitle = style({
	fontSize: "1.8rem",
	fontWeight: "400",
	color: "#8b7355",
	textAlign: "center",
	marginBottom: "3rem",
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

export const messageList = style({
	display: "flex",
	flexDirection: "column",
	gap: "2rem",
	maxHeight: "500px",
	overflowY: "auto",
	padding: "1rem 0",
	"@media": {
		"(width >= 1024px)": {
			gap: "2.5rem",
		},
		"(width < 768px)": {
			gap: "1.5rem",
		},
	},
});

export const messageItem = style({
	display: "flex",
	alignItems: "flex-start",
	gap: "1.5rem",
	padding: "2rem",
	background: "rgba(255, 255, 255, 0.7)",
	border: "1px solid rgba(212, 175, 55, 0.2)",
	"@media": {
		"(width >= 1024px)": {
			padding: "2.5rem",
			gap: "2rem",
		},
		"(width < 768px)": {
			padding: "1.5rem",
			gap: "1rem",
		},
	},
});

export const messageIcon = style({
	fontSize: "1.2rem",
	flexShrink: 0,
	marginTop: "0.2rem",
	opacity: 0.7,
});

export const messageText = style({
	fontSize: "1.1rem",
	lineHeight: "1.8",
	color: "#6b5b47",
	wordBreak: "break-word",
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
