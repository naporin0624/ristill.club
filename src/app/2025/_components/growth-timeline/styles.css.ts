import { style, keyframes } from "@vanilla-extract/css";

const gradientFlow = keyframes({
	"0%": { backgroundPosition: "0% 50%" },
	"50%": { backgroundPosition: "100% 50%" },
	"100%": { backgroundPosition: "0% 50%" },
});

const sparkle = keyframes({
	"0%, 100%": { transform: "scale(1) rotate(0deg)", opacity: 0.7 },
	"50%": { transform: "scale(1.2) rotate(180deg)", opacity: 1 },
});

export const root = style({
	minHeight: "100vh",
	padding: "5rem 2rem",
	background: "linear-gradient(135deg, #fff8dc, #e0f6ff, #ffb6c1)",
	backgroundSize: "400% 400%",
	animation: `${gradientFlow} 15s ease infinite`,
});

export const title = style({
	fontSize: "3rem",
	fontWeight: "bold",
	textAlign: "center",
	marginBottom: "4rem",
	background: "linear-gradient(45deg, #008b8b, #ffd700, #ff69b4)",
	backgroundClip: "text",
	WebkitBackgroundClip: "text",
	WebkitTextFillColor: "transparent",
	textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
	"@media": {
		"(max-width: 768px)": {
			fontSize: "2rem",
		},
	},
});

export const timeline = style({
	position: "relative",
	maxWidth: "1000px",
	margin: "0 auto 4rem",
	padding: "2rem 0",
});

export const line = style({
	position: "absolute",
	left: "50%",
	top: 0,
	bottom: 0,
	width: "4px",
	background: "linear-gradient(180deg, #ffd700, #00ced1, #ff69b4)",
	transform: "translateX(-50%)",
	"@media": {
		"(max-width: 768px)": {
			left: "20px",
		},
	},
});

export const item = style({
	position: "relative",
	marginBottom: "3rem",
	display: "flex",
	alignItems: "center",
	selectors: {
		"&:nth-child(even)": {
			flexDirection: "row-reverse",
		},
	},
	"@media": {
		"(max-width: 768px)": {
			flexDirection: "row",
			paddingLeft: "60px",
		},
	},
});

export const date = style({
	background: "linear-gradient(45deg, #ffd700, #00ced1)",
	color: "white",
	padding: "0.5rem 1rem",
	borderRadius: "20px",
	fontWeight: "bold",
	fontSize: "0.9rem",
	textAlign: "center",
	minWidth: "120px",
	position: "absolute",
	left: "50%",
	transform: "translateX(-50%)",
	zIndex: 10,
	boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
	"@media": {
		"(max-width: 768px)": {
			left: "20px",
			transform: "translateX(-50%)",
		},
	},
});

export const card = style({
	background: "rgba(255, 255, 255, 0.95)",
	borderRadius: "20px",
	padding: "2rem",
	margin: "0 3rem",
	width: "400px",
	boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
	border: "2px solid transparent",
	backgroundImage: "linear-gradient(white, white), linear-gradient(45deg, #ffd700, #00ced1, #ff69b4)",
	backgroundOrigin: "border-box",
	backgroundClip: "content-box, border-box",
	cursor: "pointer",
	transition: "all 0.3s ease",
	":hover": {
		transform: "translateY(-5px)",
		boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)",
	},
	"@media": {
		"(max-width: 768px)": {
			width: "calc(100vw - 120px)",
			margin: "0 1rem",
		},
	},
});

export const cardTitle = style({
	fontSize: "1.3rem",
	color: "#008b8b",
	marginBottom: "0.8rem",
});

export const cardText = style({
	color: "#333",
	lineHeight: 1.6,
	marginBottom: "1rem",
});

export const achievement = style({
	background: "linear-gradient(45deg, #ffb6c1, #ffd700)",
	color: "white",
	padding: "0.5rem 1rem",
	borderRadius: "15px",
	fontSize: "0.9rem",
	fontWeight: "bold",
	textAlign: "center",
});

export const extraDetails = style({
	marginTop: "1rem",
	padding: "1rem",
	background: "rgba(255, 215, 0, 0.1)",
	borderRadius: "10px",
	borderLeft: "4px solid #ffd700",
	fontSize: "0.9rem",
	color: "#666",
});

export const letterInvitation = style({
	background: "linear-gradient(135deg, #ffd700, #00ced1)",
	borderRadius: "25px",
	padding: "3rem 2rem",
	textAlign: "center",
	position: "relative",
	overflow: "hidden",
	cursor: "pointer",
	maxWidth: "800px",
	margin: "0 auto",
	color: "white",
	textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
	boxShadow: "0 20px 50px rgba(0, 0, 0, 0.15)",
	transition: "all 0.4s ease",
	":hover": {
		transform: "translateY(-3px)",
		boxShadow: "0 25px 60px rgba(0, 0, 0, 0.2)",
	},
	"@media": {
		"(max-width: 768px)": {
			padding: "2rem 1rem",
		},
	},
});

export const invitationTitle = style({
	fontSize: "1.8rem",
	marginBottom: "1.5rem",
	fontWeight: "bold",
	"@media": {
		"(max-width: 768px)": {
			fontSize: "1.4rem",
		},
	},
});

export const invitationText = style({
	fontSize: "1.2rem",
	lineHeight: 1.6,
	marginBottom: "2rem",
	fontStyle: "italic",
	"@media": {
		"(max-width: 768px)": {
			fontSize: "1rem",
		},
	},
});

export const invitationSparkles = style({
	position: "absolute",
	top: "1rem",
	right: "1rem",
	fontSize: "2rem",
	animation: `${sparkle} 2s ease-in-out infinite`,
});

export const letterButton = style({
	background: "rgba(255, 255, 255, 0.9)",
	color: "#008b8b",
	padding: "1rem 2rem",
	borderRadius: "25px",
	fontSize: "1.1rem",
	fontWeight: "bold",
	margin: "1rem 0",
	display: "inline-block",
	transition: "all 0.3s ease",
	":hover": {
		background: "white",
		transform: "scale(1.05)",
	},
});

export const letterDescription = style({
	fontSize: "1rem",
	opacity: 0.9,
	lineHeight: 1.8,
});
