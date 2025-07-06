import { style } from "@vanilla-extract/css";

export const breakpoints = {
	desktop: "screen and (width >= 1025px)",
	tablet: "screen and (width >= 768px) and (width < 1025px)",
	mobile: "screen and (width < 768px)",
} as const;
export const maxWidth = "1440px" as const;

export const focusRing = style({
	selectors: {
		"&:focus-visible": {
			outline: "none",
			boxShadow: "0 0 0 2px #0070f3",
		},
	},
});

export const focusRingWithBorderRadius = style([
	focusRing,
	{
		selectors: {
			"&:focus-visible": {
				borderRadius: "4px",
			},
		},
	},
]);

export const linkAnimation = style({
	position: "relative",
	display: "inline-block",
	textDecoration: "none",
	transition: "color 0.8s cubic-bezier(0.23, 1, 0.32, 1)",

	selectors: {
		"&:hover": {
			color: "#0070f3",
		},
		"&::after": {
			content: '""',
			position: "absolute",
			top: "50%",
			left: 0,
			width: "0%",
			height: "1px",
			backgroundColor: "#0070f3",
			transition: "width 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
			transformOrigin: "left center",
			boxShadow: "0 0 2px rgba(0, 112, 243, 0.4)",
		},
		"&:hover::after": {
			width: "100%",
		},
	},
});

export const linkWithFocusRing = style([focusRingWithBorderRadius, linkAnimation]);
