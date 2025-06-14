import { style } from "@vanilla-extract/css";

import { lightTheme, spacingTheme, typographyTheme } from "./contracts/theme.css";

// Apply default theme - this should be applied to the root element in layout.tsx
export const themeClass = style([lightTheme, spacingTheme, typographyTheme]);
