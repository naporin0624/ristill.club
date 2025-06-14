import { style } from "@vanilla-extract/css";

export const root = style({
	minHeight: "100vh",
	padding: "5rem 2rem",
	background: "linear-gradient(135deg, #fff8dc, #ffffff)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
});

export const title = style({
	fontSize: "3rem",
	fontWeight: "bold",
	textAlign: "center",
	marginBottom: "3rem",
	background: "linear-gradient(45deg, #ffd700, #00ced1)",
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

export const content = style({
	display: "grid",
	gridTemplateColumns: "1fr 1fr",
	gap: "3rem",
	maxWidth: "1200px",
	width: "100%",
	"@media": {
		"(max-width: 768px)": {
			gridTemplateColumns: "1fr",
			gap: "2rem",
		},
	},
});

export const card = style({
	background: "rgba(255, 255, 255, 0.9)",
	borderRadius: "20px",
	padding: "2rem",
	boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
	border: "2px solid #ffd700",
	textAlign: "center",
});

export const cardTitle = style({
	fontSize: "1.5rem",
	color: "#00ced1",
	marginBottom: "1rem",
});

export const cardText = style({
	fontSize: "1.1rem",
	color: "#333",
	lineHeight: 1.6,
	marginBottom: "2rem",
});

export const avatarPlaceholder = style({
	fontSize: "5rem",
	opacity: 0.3,
});

export const charmList = style({
	background: "rgba(224, 246, 255, 0.8)",
	borderRadius: "20px",
	padding: "2rem",
	boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
	border: "2px solid #00ced1",
});

export const listTitle = style({
	fontSize: "1.5rem",
	color: "#008b8b",
	marginBottom: "1.5rem",
	textAlign: "center",
});

export const charmItem = style({
	padding: "0.8rem 1rem",
	marginBottom: "0.8rem",
	background: "rgba(255, 255, 255, 0.7)",
	borderRadius: "12px",
	fontSize: "1rem",
	color: "#333",
	border: "1px solid rgba(255, 215, 0, 0.3)",
	transition: "all 0.3s ease",
	":hover": {
		transform: "translateX(10px)",
		backgroundColor: "rgba(255, 215, 0, 0.1)",
		borderColor: "#ffd700",
	},
});

export const quoteCard = style({
	background: "linear-gradient(135deg, #ffb6c1, #ffd700)",
	borderRadius: "15px",
	padding: "1.5rem",
	marginTop: "2rem",
	textAlign: "center",
	color: "white",
	textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
});

export const quoteText = style({
	fontSize: "1.2rem",
	fontStyle: "italic",
	marginBottom: "0.5rem",
});

export const quoteAuthor = style({
	fontSize: "0.9rem",
	opacity: 0.9,
});
