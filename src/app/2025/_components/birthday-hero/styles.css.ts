import { style, keyframes } from "@vanilla-extract/css";

const gradientShift = keyframes({
	"0%": { backgroundPosition: "0% 50%" },
	"50%": { backgroundPosition: "100% 50%" },
	"100%": { backgroundPosition: "0% 50%" },
});

export const root = style({
	minHeight: "100vh",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	textAlign: "center",
	position: "relative",
	overflow: "hidden",
	background: "linear-gradient(135deg, #ffd700, #00ced1, #ffb6c1)",
	backgroundSize: "400% 400%",
	animation: `${gradientShift} 10s ease infinite`,
});

export const title = style({
	fontSize: "4rem",
	fontWeight: "bold",
	color: "#ffffff",
	textShadow: "3px 3px 6px rgba(0, 0, 0, 0.3)",
	marginBottom: "2rem",
	background: "linear-gradient(45deg, #ffd700, #ffffff)",
	backgroundClip: "text",
	WebkitBackgroundClip: "text",
	WebkitTextFillColor: "transparent",
	"@media": {
		"(max-width: 768px)": {
			fontSize: "2.5rem",
		},
	},
});

export const subtitle = style({
	fontSize: "3rem",
	fontWeight: "bold",
	color: "#ffd700",
	textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
	marginBottom: "1rem",
	"@media": {
		"(max-width: 768px)": {
			fontSize: "2rem",
		},
	},
});

export const emoji = style({
	fontSize: "4rem",
	margin: "2rem 0",
	filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2))",
	"@media": {
		"(max-width: 768px)": {
			fontSize: "3rem",
		},
	},
});

export const welcomeMessage = style({
	fontSize: "1.5rem",
	color: "#ffffff",
	textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
	opacity: 0.9,
	"@media": {
		"(max-width: 768px)": {
			fontSize: "1.2rem",
		},
	},
});

export const particle = style({
	position: "absolute",
	fontSize: "1.5rem",
	pointerEvents: "none",
	zIndex: 1,
});
