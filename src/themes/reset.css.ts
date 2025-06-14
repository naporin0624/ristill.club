import { globalStyle } from "@vanilla-extract/css";

// REQUIRED COMMENT: Using globalStyle to reset browser defaults that affect layout calculations
// This ensures consistent box-sizing and removes default margins/padding across all elements
globalStyle("*, *::before, *::after", {
	boxSizing: "border-box",
});

globalStyle("html, body", {
	margin: 0,
	padding: 0,
	minHeight: "100vh",
});

globalStyle("body", {
	fontFamily: "system-ui, sans-serif",
	lineHeight: 1.5,
	WebkitFontSmoothing: "antialiased",
	MozOsxFontSmoothing: "grayscale",
});

globalStyle("h1, h2, h3, h4, h5, h6", {
	margin: 0,
	fontWeight: "inherit",
});

globalStyle("p", {
	margin: 0,
});

globalStyle("button", {
	fontFamily: "inherit",
	fontSize: "inherit",
	fontWeight: "inherit",
	color: "inherit",
	background: "none",
	border: "none",
	padding: 0,
	margin: 0,
	cursor: "pointer",
});

globalStyle("input, textarea, select", {
	fontFamily: "inherit",
	fontSize: "inherit",
	fontWeight: "inherit",
	color: "inherit",
});

globalStyle("a", {
	color: "inherit",
	textDecoration: "none",
});

globalStyle("ul, ol", {
	margin: 0,
	padding: 0,
	listStyle: "none",
});

globalStyle("img", {
	maxWidth: "100%",
	height: "auto",
	display: "block",
});
