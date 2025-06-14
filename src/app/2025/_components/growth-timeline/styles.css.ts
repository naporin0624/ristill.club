import { style } from "@vanilla-extract/css";

export const root = style({
	minHeight: "100vh",
	padding: "6rem 3rem",
	background: "#fefdf8",
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

export const timeline = style({
	position: "relative",
	maxWidth: "900px",
	margin: "0 auto 6rem",
	padding: "3rem 0",
	"@media": {
		"(width >= 1024px)": {
			maxWidth: "1000px",
			padding: "4rem 0",
		},
		"(width < 768px)": {
			padding: "2rem 0",
		},
	},
});

export const line = style({
	position: "absolute",
	left: "50%",
	top: 0,
	bottom: 0,
	width: "1px",
	background: "rgba(180, 160, 120, 0.3)",
	transform: "translateX(-50%)",
	"@media": {
		"(width < 768px)": {
			left: "30px",
		},
	},
});

export const item = style({
	position: "relative",
	marginBottom: "4rem",
	display: "flex",
	alignItems: "center",
	cursor: "pointer",
	selectors: {
		"&:nth-child(even)": {
			flexDirection: "row-reverse",
		},
	},
	"@media": {
		"(width >= 1024px)": {
			marginBottom: "5rem",
		},
		"(width < 768px)": {
			flexDirection: "row",
			paddingLeft: "80px",
			marginBottom: "3rem",
		},
	},
});

export const date = style({
	background: "rgba(212, 175, 55, 0.1)",
	color: "#8b7355",
	padding: "1rem 1.5rem",
	fontWeight: "400",
	fontSize: "0.9rem",
	textAlign: "center",
	minWidth: "140px",
	position: "absolute",
	left: "50%",
	transform: "translateX(-50%)",
	zIndex: 10,
	border: "1px solid rgba(212, 175, 55, 0.3)",
	fontFamily: "serif",
	letterSpacing: "0.05em",
	"@media": {
		"(width >= 1024px)": {
			fontSize: "1rem",
			padding: "1.2rem 2rem",
		},
		"(width < 768px)": {
			left: "30px",
			fontSize: "0.8rem",
			padding: "0.8rem 1rem",
			minWidth: "120px",
		},
	},
});

export const card = style({
	background: "rgba(255, 255, 255, 0.6)",
	padding: "3rem",
	margin: "0 4rem",
	width: "400px",
	border: "1px solid rgba(180, 160, 120, 0.2)",
	":hover": {
		background: "rgba(255, 255, 255, 0.8)",
	},
	"@media": {
		"(width >= 1024px)": {
			width: "450px",
			padding: "4rem",
			margin: "0 5rem",
		},
		"(width < 768px)": {
			width: "calc(100vw - 140px)",
			margin: "0 1rem",
			padding: "2rem",
		},
	},
});

export const cardTitle = style({
	fontSize: "1.5rem",
	color: "#8b7355",
	marginBottom: "1.5rem",
	fontWeight: "400",
	fontFamily: "serif",
	letterSpacing: "0.05em",
	"@media": {
		"(width >= 1024px)": {
			fontSize: "1.6rem",
		},
		"(width < 768px)": {
			fontSize: "1.3rem",
		},
	},
});

export const cardText = style({
	color: "#6b5b47",
	lineHeight: "1.8",
	marginBottom: "2rem",
	fontFamily: "serif",
	letterSpacing: "0.02em",
	fontSize: "1rem",
	"@media": {
		"(width >= 1024px)": {
			fontSize: "1.1rem",
		},
		"(width < 768px)": {
			fontSize: "0.95rem",
		},
	},
});

export const achievement = style({
	background: "rgba(212, 175, 55, 0.1)",
	color: "#8b7355",
	padding: "1rem 1.5rem",
	fontSize: "0.9rem",
	fontWeight: "400",
	textAlign: "center",
	border: "1px solid rgba(212, 175, 55, 0.3)",
	fontFamily: "serif",
	letterSpacing: "0.02em",
	"@media": {
		"(width >= 1024px)": {
			fontSize: "1rem",
			padding: "1.2rem 2rem",
		},
		"(width < 768px)": {
			fontSize: "0.85rem",
			padding: "0.8rem 1.2rem",
		},
	},
});

export const extraDetails = style({
	marginTop: "2rem",
	padding: "2rem",
	background: "rgba(212, 175, 55, 0.05)",
	borderLeft: "2px solid rgba(212, 175, 55, 0.3)",
	fontSize: "0.9rem",
	color: "#6b5b47",
	fontFamily: "serif",
	letterSpacing: "0.02em",
	lineHeight: "1.6",
	"@media": {
		"(width >= 1024px)": {
			fontSize: "1rem",
			padding: "2.5rem",
		},
		"(width < 768px)": {
			fontSize: "0.85rem",
			padding: "1.5rem",
		},
	},
});

export const letterInvitation = style({
	background: "rgba(212, 175, 55, 0.1)",
	padding: "5rem 4rem",
	textAlign: "center",
	position: "relative",
	cursor: "pointer",
	maxWidth: "800px",
	margin: "0 auto",
	color: "#8b7355",
	border: "1px solid rgba(212, 175, 55, 0.3)",
	":hover": {
		background: "rgba(212, 175, 55, 0.15)",
	},
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

export const invitationTitle = style({
	fontSize: "1.8rem",
	marginBottom: "2rem",
	fontWeight: "400",
	fontFamily: "serif",
	letterSpacing: "0.05em",
	"@media": {
		"(width >= 1024px)": {
			fontSize: "2rem",
		},
		"(width < 768px)": {
			fontSize: "1.5rem",
		},
	},
});

export const invitationText = style({
	fontSize: "1.2rem",
	lineHeight: "1.8",
	marginBottom: "3rem",
	fontStyle: "italic",
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

export const invitationSparkles = style({
	position: "absolute",
	top: "2rem",
	right: "2rem",
	fontSize: "1.5rem",
	opacity: 0.6,
});

export const letterButton = style({
	background: "rgba(255, 255, 255, 0.8)",
	color: "#8b7355",
	padding: "1.5rem 3rem",
	fontSize: "1.1rem",
	fontWeight: "400",
	margin: "2rem 0",
	display: "inline-block",
	border: "1px solid rgba(180, 160, 120, 0.3)",
	fontFamily: "serif",
	letterSpacing: "0.02em",
	":hover": {
		background: "rgba(255, 255, 255, 1)",
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

export const letterDescription = style({
	fontSize: "1rem",
	lineHeight: "1.8",
	fontFamily: "serif",
	letterSpacing: "0.02em",
	color: "#6b5b47",
	"@media": {
		"(width >= 1024px)": {
			fontSize: "1.1rem",
		},
		"(width < 768px)": {
			fontSize: "0.9rem",
		},
	},
});
