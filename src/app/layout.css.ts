import { globalStyle } from "@vanilla-extract/css";

export const globalStyles = "";

globalStyle("html, body", {
	margin: 0,
	padding: 0,
	minHeight: "100vh",
	fontFamily: "var(--font-inter)",
});

globalStyle("*", {
	boxSizing: "border-box",
});

globalStyle("#__next", {
	minHeight: "100vh",
});
