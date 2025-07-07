import { style } from "@vanilla-extract/css";

export const root = style({
	position: "fixed",
	top: 0,
	left: 0,
	width: "100%",
	height: "4px",
	backgroundColor: "rgba(255, 255, 255, 0.2)",
	zIndex: 1000,
	overflow: "hidden",
});

export const bar = style({
	height: "100%",
	backgroundColor: "#0070f3",
	transition: "width 0.1s ease-out",
	background: "linear-gradient(90deg, #0070f3 0%, #00a8ff 100%)",
	boxShadow: "0 0 10px rgba(0, 112, 243, 0.3)",
});
