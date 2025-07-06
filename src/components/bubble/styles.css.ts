import { style, keyframes } from "@vanilla-extract/css";

const bubbleFloat = keyframes({
	"0%": {
		transform: "translateY(0) translateX(0) scale(0.3)",
		opacity: 0,
	},
	"5%": {
		opacity: 0.7,
		transform: "translateY(-5vh) translateX(-8px) scale(0.5)",
	},
	"25%": {
		transform: "translateY(-25vh) translateX(-15px) scale(0.7)",
	},
	"50%": {
		transform: "translateY(-50vh) translateX(0) scale(0.9)",
	},
	"75%": {
		transform: "translateY(-75vh) translateX(15px) scale(1.1)",
	},
	"85%": {
		opacity: 0.9,
		transform: "translateY(-85vh) translateX(8px) scale(1)",
	},
	"100%": {
		transform: "translateY(-105vh) translateX(0) scale(1.3)",
		opacity: 0,
	},
});

export const root = style({
	position: "fixed",
	top: 0,
	left: 0,
	width: "100%",
	height: "100%",
	pointerEvents: "none",
	overflow: "hidden",
});

export const bubble = style({
	position: "absolute",
	bottom: "-50px",
	borderRadius: "50%",
	background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15), rgba(135, 206, 235, 0.1))",
	border: "1px solid rgba(255, 255, 255, 0.2)",
	boxShadow: "0 0 10px rgba(255, 255, 255, 0.1), inset 0 0 8px rgba(255, 255, 255, 0.15)",
	animationFillMode: "both",
	animationIterationCount: "infinite",
	animationTimingFunction: "linear",
	willChange: "transform, opacity",
	selectors: {
		"&::before": {
			content: '""',
			position: "absolute",
			top: "20%",
			left: "20%",
			width: "30%",
			height: "30%",
			background: "rgba(255, 255, 255, 0.25)",
			borderRadius: "50%",
			filter: "blur(3px)",
		},
		"&::after": {
			content: '""',
			position: "absolute",
			top: "40%",
			right: "30%",
			width: "15%",
			height: "15%",
			background: "rgba(255, 255, 255, 0.2)",
			borderRadius: "50%",
			filter: "blur(2px)",
		},
	},
});

export const bubbleRise1 = style([
	bubble,
	{
		animationName: bubbleFloat,
		animationDuration: "15s",
	},
]);

export const bubbleRise2 = style([
	bubble,
	{
		animationName: bubbleFloat,
		animationDuration: "20s",
	},
]);

export const bubbleRise3 = style([
	bubble,
	{
		animationName: bubbleFloat,
		animationDuration: "25s",
	},
]);

export const bubbleRise4 = style([
	bubble,
	{
		animationName: bubbleFloat,
		animationDuration: "30s",
	},
]);
