import { style } from "@vanilla-extract/css";

export const root = style({
	minHeight: "100vh",
	padding: "5rem 2rem",
	background: "linear-gradient(135deg, #fff8dc, #ffb6c1, #e0f6ff)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	position: "relative",
	overflow: "hidden",
});

export const sparkle = style({
	position: "absolute",
	fontSize: "1.5rem",
	pointerEvents: "none",
	zIndex: 1,
	color: "#ffd700",
});

export const title = style({
	fontSize: "3rem",
	fontWeight: "bold",
	textAlign: "center",
	marginBottom: "3rem",
	background: "linear-gradient(45deg, #ff69b4, #ffd700, #00ced1)",
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

export const formRoot = style({
	maxWidth: "600px",
	width: "100%",
	background: "rgba(255, 255, 255, 0.95)",
	borderRadius: "25px",
	padding: "2.5rem",
	boxShadow: "0 20px 50px rgba(0, 0, 0, 0.1)",
	border: "3px solid transparent",
	backgroundImage: "linear-gradient(white, white), linear-gradient(45deg, #ffd700, #ff69b4, #00ced1)",
	backgroundOrigin: "border-box",
	backgroundClip: "content-box, border-box",
	marginBottom: "2rem",
	"@media": {
		"(max-width: 768px)": {
			padding: "2rem 1.5rem",
		},
	},
});

export const inputRoot = style({
	position: "relative",
	marginBottom: "1.5rem",
});

export const textarea = style({
	width: "100%",
	padding: "1.5rem",
	borderRadius: "15px",
	border: "2px solid #e0f6ff",
	fontSize: "1.1rem",
	lineHeight: 1.6,
	resize: "none",
	outline: "none",
	fontFamily: "inherit",
	transition: "all 0.3s ease",
	":focus": {
		borderColor: "#00ced1",
		boxShadow: "0 0 0 3px rgba(0, 206, 209, 0.1)",
	},
	"::placeholder": {
		color: "#999",
		fontStyle: "italic",
	},
});

export const charCount = style({
	position: "absolute",
	bottom: "0.5rem",
	right: "1rem",
	fontSize: "0.8rem",
	color: "#666",
	background: "rgba(255, 255, 255, 0.8)",
	padding: "0.2rem 0.5rem",
	borderRadius: "10px",
});

export const submitButton = style({
	width: "100%",
	padding: "1.2rem 2rem",
	background: "linear-gradient(45deg, #ff69b4, #ffd700)",
	color: "white",
	border: "none",
	borderRadius: "20px",
	fontSize: "1.2rem",
	fontWeight: "bold",
	cursor: "pointer",
	textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
	boxShadow: "0 8px 25px rgba(255, 105, 180, 0.3)",
	transition: "all 0.3s ease",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	gap: "0.5rem",
	":hover": {
		transform: "translateY(-2px)",
		boxShadow: "0 12px 35px rgba(255, 105, 180, 0.4)",
	},
	":disabled": {
		opacity: 0.6,
		cursor: "not-allowed",
		transform: "none",
		boxShadow: "0 8px 25px rgba(255, 105, 180, 0.3)",
	},
});

export const loadingSpinner = style({
	fontSize: "1.2rem",
});

export const counterRoot = style({
	textAlign: "center",
	fontSize: "1.3rem",
	fontWeight: "bold",
	color: "#008b8b",
	background: "rgba(255, 255, 255, 0.9)",
	padding: "1rem 2rem",
	borderRadius: "20px",
	boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
	border: "2px solid #00ced1",
	marginBottom: "3rem",
});

export const messageWall = style({
	maxWidth: "800px",
	width: "100%",
	background: "rgba(255, 255, 255, 0.9)",
	borderRadius: "20px",
	padding: "2.5rem",
	boxShadow: "0 15px 40px rgba(0, 0, 0, 0.1)",
	border: "2px solid #ffb6c1",
	"@media": {
		"(max-width: 768px)": {
			padding: "2rem 1.5rem",
		},
	},
});

export const messageWallTitle = style({
	fontSize: "1.8rem",
	fontWeight: "bold",
	color: "#ff69b4",
	textAlign: "center",
	marginBottom: "2rem",
	"@media": {
		"(max-width: 768px)": {
			fontSize: "1.5rem",
		},
	},
});

export const messageList = style({
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
	maxHeight: "400px",
	overflowY: "auto",
	padding: "0.5rem",
});

export const messageItem = style({
	display: "flex",
	alignItems: "flex-start",
	gap: "1rem",
	padding: "1rem 1.5rem",
	background: "linear-gradient(135deg, #fff8dc, #e0f6ff)",
	borderRadius: "15px",
	border: "1px solid rgba(255, 215, 0, 0.3)",
	transition: "all 0.3s ease",
	":hover": {
		transform: "translateX(5px)",
		backgroundColor: "rgba(255, 215, 0, 0.1)",
		borderColor: "#ffd700",
	},
});

export const messageIcon = style({
	fontSize: "1.2rem",
	flexShrink: 0,
	marginTop: "0.1rem",
});

export const messageText = style({
	fontSize: "1rem",
	lineHeight: 1.6,
	color: "#333",
	wordBreak: "break-word",
});
