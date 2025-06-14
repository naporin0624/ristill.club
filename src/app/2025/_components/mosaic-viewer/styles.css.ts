import { style } from "@vanilla-extract/css";

export const root = style({
	minHeight: "100vh",
	padding: "5rem 2rem",
	background: "linear-gradient(135deg, #e0f6ff, #fff8dc)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	position: "relative",
	overflow: "hidden",
});

export const title = style({
	fontSize: "3rem",
	fontWeight: "bold",
	textAlign: "center",
	marginBottom: "2rem",
	background: "linear-gradient(45deg, #00ced1, #ffd700)",
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

export const mosaicGrid = style({
	display: "grid",
	gridTemplateColumns: "repeat(10, 1fr)",
	gap: "4px",
	maxWidth: "600px",
	width: "100%",
	aspectRatio: "1",
	padding: "1rem",
	background: "rgba(255, 255, 255, 0.9)",
	borderRadius: "20px",
	boxShadow: "0 15px 40px rgba(0, 0, 0, 0.1)",
	border: "3px solid #ffd700",
	"@media": {
		"(max-width: 768px)": {
			gridTemplateColumns: "repeat(8, 1fr)",
			maxWidth: "400px",
		},
	},
});

export const mosaicItem = style({
	aspectRatio: "1",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	borderRadius: "4px",
	fontSize: "0.8rem",
	cursor: "pointer",
	position: "relative",
	transition: "all 0.3s ease",
	":hover": {
		transform: "scale(1.2)",
		zIndex: 10,
		boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
	},
});

export const counter = style({
	fontSize: "1.5rem",
	fontWeight: "bold",
	color: "#008b8b",
	textAlign: "center",
	marginBottom: "2rem",
	background: "rgba(255, 255, 255, 0.8)",
	padding: "1rem 2rem",
	borderRadius: "25px",
	boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
	border: "2px solid #00ced1",
});

export const message = style({
	position: "absolute",
	bottom: "120%",
	left: "50%",
	transform: "translateX(-50%)",
	background: "rgba(0, 0, 0, 0.8)",
	color: "white",
	padding: "0.5rem 1rem",
	borderRadius: "8px",
	fontSize: "0.7rem",
	whiteSpace: "nowrap",
	zIndex: 20,
	pointerEvents: "none",
	"::after": {
		content: '""',
		position: "absolute",
		top: "100%",
		left: "50%",
		transform: "translateX(-50%)",
		border: "4px solid transparent",
		borderTopColor: "rgba(0, 0, 0, 0.8)",
	},
});

export const heartFloat = style({
	position: "absolute",
	fontSize: "1.5rem",
	pointerEvents: "none",
	zIndex: 1,
	color: "#ff69b4",
});

export const loveParticle = style({
	position: "absolute",
	fontSize: "1.2rem",
	pointerEvents: "none",
	zIndex: 2,
});

export const storyText = style({
	textAlign: "center",
	fontSize: "1.2rem",
	color: "#666",
	fontStyle: "italic",
	marginBottom: "2rem",
	padding: "0 2rem",
	"@media": {
		"(max-width: 768px)": {
			fontSize: "1rem",
			padding: "0 1rem",
		},
	},
});

export const collectionStory = style({
	textAlign: "center",
	maxWidth: "600px",
	background: "rgba(255, 255, 255, 0.9)",
	borderRadius: "20px",
	padding: "2rem",
	boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
	border: "2px solid rgba(255, 215, 0, 0.3)",
	"@media": {
		"(max-width: 768px)": {
			padding: "1.5rem",
		},
	},
});

export const collectionTitle = style({
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

export const collectionText = style({
	fontSize: "1rem",
	color: "#555",
	lineHeight: 1.7,
	"@media": {
		"(max-width: 768px)": {
			fontSize: "0.9rem",
		},
	},
});
