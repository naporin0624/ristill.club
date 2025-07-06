import { style } from "@vanilla-extract/css";

// Remove CSS keyframes - using motion/react variants instead

// Full screen overlay container
export const root = style({
	position: "fixed",
	top: 0,
	left: 0,
	width: "100%",
	height: "100%",
	zIndex: 9999,
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: "#5EC9FF",
	overflow: "hidden",
});

// Same logo with mask
export const sameLogo = style({
	position: "relative",
	width: "88px",
	height: "72px",
	background: "#ffffff",
	mask: "url(/same.svg) no-repeat center",
	maskSize: "contain",
	// Webkit prefixed properties for browser compatibility
	WebkitMask: "url(/same.svg) no-repeat center",
	WebkitMaskSize: "contain",
	transformOrigin: "center center",
	flexShrink: 0,
});

// Text container with proper positioning
export const textContainer = style({
	position: "relative",
	marginTop: "2rem",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	perspective: "1000px",
	height: "3rem", // Reserve space for text
	width: "100%",
});

// Base text styles
export const textBase = style({
	fontSize: "clamp(1.2rem, 4vw, 2rem)",
	fontWeight: "900",
	color: "#ffffff",
	display: "inline-block",
	textAlign: "center",
	whiteSpace: "nowrap",
	lineHeight: 1.2,
	fontFamily: "ads-rumba, sans-serif",
});

// Motion text styles (no animations - handled by motion/react)
export const motionText = style([
	textBase,
	{
		display: "inline-block",
		fontWeight: "800",
		// No positioning - let parent flexbox handle centering
	},
]);

// Content container that will be revealed
export const content = style({
	position: "fixed",
	top: 0,
	left: 0,
	width: "100%",
	height: "100%",
	pointerEvents: "none",
	zIndex: 1,
});

// Screen reader only content
export const visuallyHidden = style({
	position: "absolute",
	width: "1px",
	height: "1px",
	padding: 0,
	margin: "-1px",
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	border: 0,
});

// Loading progress indicator (visually hidden but accessible)
export const loadingStatus = style({
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "100%",
	height: "100%",
	pointerEvents: "none",
});
