import { style } from "@vanilla-extract/css";

export const root = style({
	minHeight: "100vh",
	padding: "5rem 2rem",
	background: "linear-gradient(135deg, #ffb6c1, #fff8dc, #e0f6ff)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	position: "relative",
	overflow: "hidden",
});

export const floatingHeart = style({
	position: "absolute",
	fontSize: "2rem",
	pointerEvents: "none",
	zIndex: 1,
	color: "#ff69b4",
});

export const title = style({
	fontSize: "3rem",
	fontWeight: "bold",
	textAlign: "center",
	marginBottom: "3rem",
	background: "linear-gradient(45deg, #ff69b4, #ffd700)",
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

export const messageRoot = style({
	maxWidth: "800px",
	width: "100%",
	background: "rgba(255, 255, 255, 0.95)",
	borderRadius: "25px",
	padding: "3rem",
	boxShadow: "0 20px 50px rgba(0, 0, 0, 0.1)",
	border: "3px solid transparent",
	backgroundImage: "linear-gradient(white, white), linear-gradient(45deg, #ff69b4, #ffd700, #00ced1)",
	backgroundOrigin: "border-box",
	backgroundClip: "content-box, border-box",
	"@media": {
		"(max-width: 768px)": {
			padding: "2rem 1.5rem",
		},
	},
});

export const coreMessage = style({
	textAlign: "center",
	marginBottom: "2rem",
});

export const coreMessageTitle = style({
	fontSize: "2.2rem",
	fontWeight: "bold",
	color: "#008b8b",
	marginBottom: "1rem",
	textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
	"@media": {
		"(max-width: 768px)": {
			fontSize: "1.6rem",
		},
	},
});

export const heartDecoration = style({
	fontSize: "2rem",
	letterSpacing: "1rem",
	opacity: 0.8,
});

export const letterContent = style({
	lineHeight: 1.8,
	fontSize: "1.1rem",
	color: "#444",
	marginBottom: "2rem",
	"@media": {
		"(max-width: 768px)": {
			fontSize: "1rem",
		},
	},
});

export const letterParagraph = style({
	marginBottom: "1.5rem",
	textAlign: "center",
});

export const expandButton = style({
	background: "linear-gradient(45deg, #ff69b4, #ffd700)",
	color: "white",
	border: "none",
	padding: "1rem 2rem",
	borderRadius: "25px",
	fontSize: "1.1rem",
	fontWeight: "bold",
	cursor: "pointer",
	margin: "1rem auto",
	display: "block",
	textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
	boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
	transition: "all 0.3s ease",
	":hover": {
		transform: "translateY(-2px)",
		boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
	},
});

export const signature = style({
	textAlign: "center",
	marginTop: "2rem",
	paddingTop: "2rem",
	borderTop: "2px solid rgba(255, 215, 0, 0.3)",
});

export const signatureParagraph = style({
	fontSize: "1.1rem",
	color: "#666",
	marginBottom: "0.5rem",
	fontStyle: "italic",
});

export const signatureDecoration = style({
	fontSize: "1.5rem",
	marginTop: "1rem",
	letterSpacing: "1rem",
	opacity: 0.7,
});

export const futureWish = style({
	background: "linear-gradient(135deg, #e0f6ff, #fff8dc)",
	borderRadius: "20px",
	padding: "2rem",
	marginTop: "2rem",
	textAlign: "center",
	border: "2px solid rgba(0, 206, 209, 0.3)",
	"@media": {
		"(max-width: 768px)": {
			padding: "1.5rem",
		},
	},
});

export const futureWishTitle = style({
	fontSize: "1.5rem",
	color: "#008b8b",
	marginBottom: "1rem",
	fontWeight: "bold",
	"@media": {
		"(max-width: 768px)": {
			fontSize: "1.3rem",
		},
	},
});

export const futureWishParagraph = style({
	fontSize: "1.1rem",
	color: "#555",
	lineHeight: 1.7,
	marginBottom: "1rem",
	"@media": {
		"(max-width: 768px)": {
			fontSize: "1rem",
		},
	},
});

export const wishDecoration = style({
	fontSize: "1.8rem",
	fontWeight: "bold",
	color: "#ff69b4",
	textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
	marginTop: "1rem",
});
