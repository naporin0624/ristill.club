import { createTheme } from "@vanilla-extract/css";

import { colors } from "../tokens/colors.css";
import { spacing } from "../tokens/spacing.css";
import { typography } from "../tokens/typography.css";

export const lightTheme = createTheme(colors, {
	primary: "#0070f3",
	secondary: "#f4f4f4",
	background: "#ffffff",
	text: "#000000",
	surface: "#ffffff",
	border: "#e5e7eb",
	success: "#10b981",
	warning: "#f59e0b",
	error: "#ef4444",
	info: "#3b82f6",
});

export const darkTheme = createTheme(colors, {
	primary: "#0070f3",
	secondary: "#374151",
	background: "#000000",
	text: "#ffffff",
	surface: "#1f2937",
	border: "#374151",
	success: "#10b981",
	warning: "#f59e0b",
	error: "#ef4444",
	info: "#3b82f6",
});

export const spacingTheme = createTheme(spacing, {
	xs: "0.25rem",
	sm: "0.5rem",
	md: "1rem",
	lg: "1.5rem",
	xl: "2rem",
	"2xl": "3rem",
	"3xl": "4rem",
	"4xl": "6rem",
});

export const typographyTheme = createTheme(typography, {
	fontFamily: {
		sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
		serif: 'Georgia, "Times New Roman", Times, serif',
		mono: '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", monospace',
	},
	fontSize: {
		xs: "0.75rem",
		sm: "0.875rem",
		base: "1rem",
		lg: "1.125rem",
		xl: "1.25rem",
		"2xl": "1.5rem",
		"3xl": "1.875rem",
		"4xl": "2.25rem",
	},
	fontWeight: {
		normal: "400",
		medium: "500",
		semibold: "600",
		bold: "700",
	},
	lineHeight: {
		tight: "1.25",
		normal: "1.5",
		relaxed: "1.75",
	},
});
