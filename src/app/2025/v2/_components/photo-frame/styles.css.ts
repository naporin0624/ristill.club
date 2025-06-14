import { style, keyframes } from "@vanilla-extract/css";

const shimmer = keyframes({
	"0%": { backgroundPosition: "-200% 0" },
	"100%": { backgroundPosition: "200% 0" },
});

const float = keyframes({
	"0%, 100%": { transform: "translateY(0px)" },
	"50%": { transform: "translateY(-8px)" },
});

export const root = style({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	padding: "1rem",
});

export const frameOuter = style({
	width: "100%",
	maxWidth: "800px",
	height: "85vh",
	minHeight: "600px",
	background: `
		linear-gradient(145deg, #8b4513, #d2691e, #daa520, #cd853f, #8b4513)
	`,
	padding: "18px",
	borderRadius: "8px",
	boxShadow: `
		0 0 0 2px #654321,
		0 8px 32px rgba(139, 69, 19, 0.3),
		inset 0 2px 0 rgba(255, 255, 255, 0.15),
		inset 0 -2px 0 rgba(0, 0, 0, 0.15)
	`,
	position: "relative",

	"@media": {
		"(width < 768px)": {
			height: "80vh",
			minHeight: "500px",
			padding: "15px",
			maxWidth: "95vw",
		},
	},

	selectors: {
		"&::before": {
			content: '""',
			position: "absolute",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			background: `
				linear-gradient(
					90deg,
					transparent,
					rgba(255, 255, 255, 0.3),
					transparent
				)
			`,
			backgroundSize: "200% 100%",
			animation: `${shimmer} 4s infinite`,
			borderRadius: "8px",
		},
	},
});

export const frameInner = style({
	width: "100%",
	height: "100%",
	background: "#654321",
	padding: "8px",
	borderRadius: "3px",
});

export const matting = style({
	width: "100%",
	height: "100%",
	backgroundColor: "#fefcf8",
	padding: "35px",
	borderRadius: "2px",
	position: "relative",

	"@media": {
		"(width < 768px)": {
			padding: "25px",
		},
	},
});

export const photoContent = style({
	width: "100%",
	height: "100%",
	background: `
		radial-gradient(ellipse at center top, rgba(255, 248, 220, 0.7) 0%, transparent 50%),
		radial-gradient(ellipse at center bottom, rgba(240, 248, 255, 0.5) 0%, transparent 50%),
		linear-gradient(180deg, 
			rgba(255, 253, 245, 0.85) 0%, 
			rgba(248, 250, 255, 0.85) 50%,
			rgba(255, 252, 245, 0.85) 100%
		)
	`,
	borderRadius: "2px",
	display: "flex",
	flexDirection: "column",
	padding: "3rem 2rem",
	border: "1px solid rgba(139, 69, 19, 0.1)",
	gap: "4rem",
	position: "relative",
	overflow: "auto",

	"@media": {
		"(width < 768px)": {
			gap: "3rem",
			padding: "2rem 1.5rem",
		},
		"(width < 480px)": {
			gap: "2rem",
			padding: "1.5rem 1rem",
		},
	},
});

// Hero Section
export const heroSection = style({
	textAlign: "center",
	padding: "2rem 0",
	borderBottom: "1px solid rgba(139, 69, 19, 0.1)",
});

export const mainTitle = style({
	fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
	fontWeight: "300",
	letterSpacing: "-0.01em",
	lineHeight: 1.2,
	background: `
		linear-gradient(135deg, 
			#c9a96b 0%, 
			#daa520 25%, 
			#f4d03f 50%, 
			#2980b9 75%, 
			#1abc9c 100%
		)
	`,
	backgroundClip: "text",
	WebkitBackgroundClip: "text",
	color: "transparent",
	margin: "0 0 1rem 0",
	fontFamily: "'Inter', 'Segoe UI', sans-serif",
});

export const subTitle = style({
	fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
	fontWeight: "500",
	color: "#2c5aa0",
	margin: "0 0 0.75rem 0",
	fontFamily: "'Inter', 'Segoe UI', sans-serif",
});

export const dateText = style({
	fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
	fontWeight: "400",
	letterSpacing: "0.1em",
	color: "#8b7355",
	fontFamily: "'JetBrains Mono', 'Courier New', monospace",
	margin: "0 0 0.5rem 0",
	opacity: 0.8,
});

export const conceptText = style({
	fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
	fontWeight: "400",
	letterSpacing: "0.005em",
	color: "#34495e",
	fontStyle: "italic",
	margin: 0,
	opacity: 0.9,
	fontFamily: "'Inter', 'Segoe UI', sans-serif",
});

// Section Styles
export const memoriesSection = style({
	width: "100%",
});

export const timelineSection = style({
	width: "100%",
});

export const messageSection = style({
	width: "100%",
});

export const sectionTitle = style({
	fontSize: "clamp(1.2rem, 2.8vw, 1.6rem)",
	fontWeight: "500",
	background: `
		linear-gradient(135deg, 
			#8b4513 0%, 
			#d2691e 25%, 
			#daa520 50%, 
			#2980b9 75%, 
			#1abc9c 100%
		)
	`,
	backgroundClip: "text",
	WebkitBackgroundClip: "text",
	color: "transparent",
	margin: "0 0 2rem 0",
	textAlign: "center",
	letterSpacing: "0.02em",
	fontFamily: "'Inter', 'Segoe UI', sans-serif",
});

// Memory styles
export const memoryGrid = style({
	display: "grid",
	gridTemplateColumns: "1fr 1fr",
	gap: "1rem",
	width: "100%",

	"@media": {
		"(width < 600px)": {
			gridTemplateColumns: "1fr",
			gap: "0.8rem",
		},
	},
});

export const memoryItem = style({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "0.8rem",
	padding: "1.5rem 1rem",
	backgroundColor: "rgba(252, 251, 248, 0.7)",
	border: "1px solid rgba(139, 69, 19, 0.1)",
	borderRadius: "4px",
	transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
	animation: `${float} 4s ease-in-out infinite`,

	selectors: {
		"&:hover": {
			transform: "translateY(-2px)",
			backgroundColor: "rgba(248, 250, 255, 0.8)",
			borderColor: "rgba(120, 180, 200, 0.15)",
		},
		"&:nth-child(2)": {
			animationDelay: "0.5s",
		},
		"&:nth-child(3)": {
			animationDelay: "1s",
		},
		"&:nth-child(4)": {
			animationDelay: "1.5s",
		},
	},

	"@media": {
		"(width < 768px)": {
			padding: "1.2rem 0.8rem",
		},
	},
});

export const memoryIcon = style({
	fontSize: "1.8rem",
	opacity: 0.8,

	"@media": {
		"(width < 768px)": {
			fontSize: "1.5rem",
		},
	},
});

export const memoryItemTitle = style({
	fontSize: "0.9rem",
	fontWeight: "500",
	color: "#2c3e50",
	margin: 0,
	textAlign: "center",
	letterSpacing: "0.01em",
	fontFamily: "'Inter', 'Segoe UI', sans-serif",

	"@media": {
		"(width < 768px)": {
			fontSize: "0.8rem",
		},
	},
});

export const memoryItemDesc = style({
	fontSize: "0.75rem",
	fontWeight: "400",
	color: "#7f8c8d",
	margin: 0,
	textAlign: "center",
	lineHeight: 1.4,
	fontFamily: "'Inter', 'Segoe UI', sans-serif",

	"@media": {
		"(width < 768px)": {
			fontSize: "0.7rem",
		},
	},
});

// Timeline styles
export const timelineFlow = style({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	gap: "1rem",
	width: "100%",
	flexWrap: "wrap",

	"@media": {
		"(width < 600px)": {
			flexDirection: "column",
			gap: "1rem",
		},
	},
});

export const timelineItem = style({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "0.5rem",
	padding: "1.2rem 0.8rem",
	backgroundColor: "rgba(252, 251, 248, 0.7)",
	border: "1px solid rgba(139, 69, 19, 0.1)",
	borderRadius: "4px",
	transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
	minWidth: "100px",
	animation: `${float} 3s ease-in-out infinite`,

	selectors: {
		"&:hover": {
			transform: "translateY(-2px)",
			backgroundColor: "rgba(248, 250, 255, 0.8)",
		},
		"&:nth-child(1)": {
			animationDelay: "0s",
		},
		"&:nth-child(3)": {
			animationDelay: "0.7s",
		},
		"&:nth-child(5)": {
			animationDelay: "1.4s",
		},
	},
});

export const timelineIcon = style({
	fontSize: "1.5rem",
	opacity: 0.8,
});

export const timelineItemTitle = style({
	fontSize: "0.85rem",
	fontWeight: "500",
	color: "#2c3e50",
	margin: 0,
	textAlign: "center",
	fontFamily: "'Inter', 'Segoe UI', sans-serif",
});

export const timelineItemDesc = style({
	fontSize: "0.7rem",
	color: "#7f8c8d",
	margin: 0,
	textAlign: "center",
	fontFamily: "'Inter', 'Segoe UI', sans-serif",
});

export const timelineArrow = style({
	fontSize: "1rem",
	color: "#bdc3c7",
	fontWeight: "300",

	"@media": {
		"(width < 600px)": {
			transform: "rotate(90deg)",
		},
	},
});

// Message styles
export const letterCard = style({
	width: "100%",
	padding: "2rem 1.5rem",
	backgroundColor: "rgba(252, 251, 248, 0.8)",
	border: "1px solid rgba(139, 69, 19, 0.15)",
	borderRadius: "4px",

	"@media": {
		"(width < 768px)": {
			padding: "1.5rem 1rem",
		},
	},
});

export const letterTitle = style({
	fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
	fontWeight: "500",
	letterSpacing: "0.01em",
	color: "#2c3e50",
	margin: "0 0 1.5rem 0",
	textAlign: "center",
	fontFamily: "'Inter', 'Segoe UI', sans-serif",
});

export const birthdayMessage = style({
	fontSize: "clamp(0.8rem, 1.8vw, 0.95rem)",
	lineHeight: 1.7,
	color: "#34495e",
	margin: 0,
	fontWeight: "400",
	letterSpacing: "0.005em",
	fontFamily: "'Inter', 'Segoe UI', sans-serif",
	textAlign: "center",
});
