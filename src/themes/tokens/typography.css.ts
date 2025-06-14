import { createThemeContract } from "@vanilla-extract/css";

export const typography = createThemeContract({
	fontFamily: {
		sans: null,
		serif: null,
		mono: null,
	},
	fontSize: {
		xs: null,
		sm: null,
		base: null,
		lg: null,
		xl: null,
		"2xl": null,
		"3xl": null,
		"4xl": null,
	},
	fontWeight: {
		normal: null,
		medium: null,
		semibold: null,
		bold: null,
	},
	lineHeight: {
		tight: null,
		normal: null,
		relaxed: null,
	},
});
