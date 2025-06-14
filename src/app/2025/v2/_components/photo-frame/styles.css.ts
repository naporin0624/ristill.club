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
	position: "relative",
	width: "100vw",
	height: "100vh",
	overflow: "hidden",
});

export const frameOuter = style({
	position: "fixed",
	top: 0,
	left: 0,
	width: "100vw",
	height: "100vh",
	backgroundColor: "#f8f6f3",
	padding: "clamp(2rem, 4vw, 3rem)",
	paddingTop: "calc(clamp(2rem, 4vw, 3rem) + 8px)",
	zIndex: 1,
	pointerEvents: "none",

	"@media": {
		"(width < 768px)": {
			padding: "1.5rem",
			paddingTop: "calc(1.5rem + 8px)",
		},
		"(width < 480px)": {
			padding: "1rem",
			paddingTop: "calc(1rem + 8px)",
		},
	},
});

export const frameInner = style({
	width: "100%",
	height: "100%",
	position: "relative",
	padding: "2px",
	background: "transparent",
	border: "3px solid #f8f6f3",
	pointerEvents: "none",
});

const cornerSize = "40px";

export const scrollIndicator = style({
	position: "fixed",
	top: 0,
	left: 0,
	width: "100%",
	height: "4px",
	backgroundColor: "rgba(0, 0, 0, 0.1)",
	zIndex: 100,
});

export const scrollBar = style({
	height: "100%",
	backgroundColor: "#2c5aa0",
	transition: "width 0.15s ease-out",
});

export const matting = style({
	width: "100%",
	height: "100%",
	backgroundColor: "transparent",
	padding: "0",
	position: "relative",
	overflow: "hidden",
	clipPath: `polygon(
		${cornerSize} 0,
		calc(100% - ${cornerSize}) 0,
		100% ${cornerSize},
		100% calc(100% - ${cornerSize}),
		calc(100% - ${cornerSize}) 100%,
		${cornerSize} 100%,
		0 calc(100% - ${cornerSize}),
		0 ${cornerSize}
	)`,
	pointerEvents: "none",
});

export const cornerTopLeft = style({
	position: "absolute",
	top: 0,
	left: 0,
	width: cornerSize,
	height: cornerSize,
	backgroundColor: "#f8f6f3",
	clipPath: "polygon(0 0, 100% 0, 0 100%)",
	zIndex: 3,
});

export const cornerTopRight = style({
	position: "absolute",
	top: 0,
	right: 0,
	width: cornerSize,
	height: cornerSize,
	backgroundColor: "#f8f6f3",
	clipPath: "polygon(0 0, 100% 0, 100% 100%)",
	zIndex: 3,
});

export const cornerBottomLeft = style({
	position: "absolute",
	bottom: 0,
	left: 0,
	width: cornerSize,
	height: cornerSize,
	backgroundColor: "#f8f6f3",
	clipPath: "polygon(0 0, 0 100%, 100% 100%)",
	zIndex: 3,
});

export const cornerBottomRight = style({
	position: "absolute",
	bottom: 0,
	right: 0,
	width: cornerSize,
	height: cornerSize,
	backgroundColor: "#f8f6f3",
	clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
	zIndex: 3,
});

export const photoContent = style({
	position: "absolute",
	top: 0,
	left: 0,
	width: "100vw",
	height: "100vh",
	background: `
		linear-gradient(135deg, 
			#ffffff 0%, 
			#fcfcfc 50%,
			#f9f9f9 100%
		)
	`,
	display: "flex",
	flexDirection: "column",
	padding: "clamp(3rem, 6vw, 5rem) clamp(2rem, 5vw, 4rem)",
	gap: "4rem",
	overflowY: "auto",
	overflowX: "hidden",
	scrollbarWidth: "none",
	msOverflowStyle: "none",
	zIndex: 0,
	pointerEvents: "auto",

	selectors: {
		"&::-webkit-scrollbar": {
			display: "none",
		},
	},

	"@media": {
		"(width < 768px)": {
			gap: "3rem",
			padding: "3rem 2rem",
		},
		"(width < 480px)": {
			gap: "2rem",
			padding: "2rem 1.5rem",
		},
	},
});

// Hero Section
export const heroSection = style({
	width: "100%",
	minHeight: "100vh",
	padding: "2rem 0",
});

export const heroLayout = style({
	display: "grid",
	gridTemplateColumns: "400px 1fr",
	gap: "4rem",
	alignItems: "center",
	minHeight: "80vh",

	"@media": {
		"(width < 1024px)": {
			gridTemplateColumns: "1fr",
			gap: "3rem",
			textAlign: "center",
		},
	},
});

export const heroImageContainer = style({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
});

export const heroImage = style({
	width: "100%",
	maxWidth: "400px",
	height: "auto",
	borderRadius: "16px",
	boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
});

export const heroContent = style({
	display: "flex",
	flexDirection: "column",
	gap: "1.5rem",
	justifyContent: "center",
});

export const heroTitle = style({
	fontSize: "clamp(2rem, 5vw, 4rem)",
	fontWeight: "700",
	letterSpacing: "0.1em",
	color: "#c9a96b",
	fontFamily: "var(--font-playfair, 'Playfair Display'), serif",
	margin: 0,
	textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
});

export const heroName = style({
	fontSize: "clamp(2.5rem, 6vw, 5rem)",
	fontWeight: "500",
	color: "#2c5aa0",
	fontFamily: "var(--font-noto-serif-jp, 'Noto Serif JP'), serif",
	margin: 0,
	textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
});

export const heroDate = style({
	fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
	fontWeight: "300",
	letterSpacing: "0.15em",
	color: "#8b7355",
	fontFamily: "var(--font-inter, 'Inter'), sans-serif",
	margin: 0,
	opacity: 0.8,
});

export const heroDescription = style({
	fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
	lineHeight: 1.6,
	color: "#34495e",
	fontFamily: "var(--font-noto-serif-jp, 'Noto Serif JP'), serif",
	margin: 0,
	opacity: 0.9,
});





// Section Styles
export const profileSection = style({
	width: "100%",
	padding: "3rem 0",
});

export const mosaicSection = style({
	width: "100%",
	padding: "3rem 0",
});

export const growthSection = style({
	width: "100%",
	padding: "3rem 0",
});

export const letterSection = style({
	width: "100%",
	padding: "3rem 0",
});

export const messageSection = style({
	width: "100%",
	padding: "3rem 0",
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


// Gallery Styles
export const gallerySection = style({
	width: "100%",
	padding: "4rem 0",
});

export const galleryGrid = style({
	display: "grid",
	gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
	gap: "3rem",
	justifyItems: "center",

	"@media": {
		"(width < 768px)": {
			gap: "2rem",
			gridTemplateColumns: "1fr",
		},
	},
});

export const galleryItem = style({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
});

export const galleryImage = style({
	width: "100%",
	maxWidth: "300px",
	height: "auto",
	borderRadius: "16px",
	boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
	transition: "transform 0.3s ease",

	selectors: {
		"&:hover": {
			transform: "scale(1.05)",
		},
	},
});


// Mosaic Styles
export const mosaicContainer = style({
	width: "100%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "1.5rem",
});

export const mosaicImage = style({
	width: "100%",
	maxWidth: "800px",
	height: "auto",
	borderRadius: "12px",
	boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
});

export const mosaicDescription = style({
	fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
	lineHeight: 1.6,
	color: "#34495e",
	margin: 0,
	textAlign: "center",
	fontFamily: "var(--font-noto-serif-jp, 'Noto Serif JP'), serif",
});

// Growth Timeline Styles
export const growthSubtitle = style({
	fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
	color: "#7f8c8d",
	margin: "0 0 2rem 0",
	textAlign: "center",
	fontFamily: "var(--font-inter, 'Inter'), sans-serif",
});

export const growthTimeline = style({
	display: "flex",
	flexDirection: "column",
	gap: "2rem",
	alignItems: "center",
});

export const growthItem = style({
	background: "rgba(255, 255, 255, 0.8)",
	padding: "1.5rem",
	borderRadius: "8px",
	width: "100%",
	maxWidth: "400px",
	textAlign: "center",
});

export const growthDate = style({
	fontSize: "clamp(0.8rem, 1.8vw, 1rem)",
	fontWeight: "600",
	color: "#c9a96b",
	margin: "0 0 0.5rem 0",
	fontFamily: "var(--font-inter, 'Inter'), sans-serif",
});

export const growthTitle = style({
	fontSize: "clamp(1rem, 2.2vw, 1.3rem)",
	fontWeight: "500",
	color: "#2c5aa0",
	margin: "0 0 0.5rem 0",
	fontFamily: "var(--font-noto-serif-jp, 'Noto Serif JP'), serif",
});

export const growthDesc = style({
	fontSize: "clamp(0.8rem, 1.8vw, 1rem)",
	color: "#7f8c8d",
	margin: 0,
	fontFamily: "var(--font-noto-serif-jp, 'Noto Serif JP'), serif",
});

// Letter Styles
export const letterInvitation = style({
	background: "linear-gradient(135deg, rgba(201, 169, 107, 0.1), rgba(41, 128, 185, 0.1))",
	padding: "2rem",
	borderRadius: "12px",
	textAlign: "center",
	border: "1px solid rgba(201, 169, 107, 0.2)",
});

export const letterTitle = style({
	fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
	fontWeight: "500",
	color: "#2c5aa0",
	margin: "0 0 1rem 0",
	fontFamily: "var(--font-noto-serif-jp, 'Noto Serif JP'), serif",
});

export const letterDescription = style({
	fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
	lineHeight: 1.6,
	color: "#34495e",
	margin: "0 0 1.5rem 0",
	fontFamily: "var(--font-noto-serif-jp, 'Noto Serif JP'), serif",
});

export const letterButton = style({
	background: "linear-gradient(135deg, #c9a96b, #2980b9)",
	color: "white",
	border: "none",
	padding: "0.8rem 1.5rem",
	borderRadius: "8px",
	fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
	fontWeight: "500",
	cursor: "pointer",
	transition: "all 0.3s ease",
	fontFamily: "var(--font-noto-serif-jp, 'Noto Serif JP'), serif",

	selectors: {
		"&:hover": {
			transform: "translateY(-2px)",
			boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
		},
	},
});

export const letterCardTitle = style({
	fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
	fontWeight: "500",
	letterSpacing: "0.01em",
	color: "#2c3e50",
	margin: "0 0 1.5rem 0",
	textAlign: "center",
	fontFamily: "var(--font-noto-serif-jp, 'Noto Serif JP'), serif",
});

export const birthdayMessage = style({
	fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
	lineHeight: 1.7,
	color: "#34495e",
	margin: 0,
	fontWeight: "400",
	letterSpacing: "0.005em",
	fontFamily: "var(--font-noto-serif-jp, 'Noto Serif JP'), serif",
	textAlign: "center",
});
