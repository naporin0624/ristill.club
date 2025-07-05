# Tech Stack & Project Structure

## 🔧 Tech Stack

- **Framework**: Next.js 15.3.3 (App Router)
- **React**: 19.1.0 (Latest with React 19 features)
- **Styling**: Vanilla Extract CSS
- **Testing**: Vitest
- **Package Manager**: pnpm
- **Type System**: TypeScript 5.5.2
- **Deployment**: Cloudflare Workers with OpenNext
- **Domain**: `ristill.club`

## 📦 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (birthday)/        # Route groups for birthday celebration
│   │   └── 2025/          # 2025 anniversary content
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout (with timezone configuration)
│   ├── layout.css.ts      # Layout styles
│   ├── styles.css.ts      # Page-specific styles
│   └── _components/       # Page-specific components
├── components/            # Reusable components
│   └── image/             # Custom Next.js Image wrapper with loading states
│       ├── index.tsx      # Enhanced Image component
│       └── styles.css.ts  # Image component styles
├── themes/                # Global styling and theme system
│   ├── provider.tsx       # ThemeProvider component
│   ├── styles.css.ts      # Theme-specific styles
│   └── global.css.ts      # Global application styles
├── adapters/              # External library adapters
│   └── date.ts            # dayjs adapter with timezone support (Asia/Tokyo)
├── utils/                 # Pure utility functions (TDD required)
│   ├── date/              # Date manipulation utilities (using dayjs)
│   │   ├── index.ts       # Main exports
│   │   └── date.test.ts   # TDD tests (required)
│   ├── validation/        # Validation utilities
│   │   ├── index.ts       # Main exports
│   │   └── validation.test.ts # TDD tests (required)
│   └── calculations/      # Mathematical calculations
│       ├── index.ts       # Main exports
│       └── calculations.test.ts # TDD tests (required)
└── assets/               # Static resources
```

## 🎨 Naming Conventions

### Files & Directories

- **Always use kebab-case**
- Example: `user-profile/`, `event-card.test.tsx`

### Code Naming

- **Components**: PascalCase (`UserProfile`)
- **Functions & variables**: camelCase (`calculateDuration`)
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`)
- **Types & interfaces**: PascalCase (`User`, `EventService`)

### Type System Usage

```typescript
// Use type for data structures
type User = {
	id: string;
	name: string;
	email: string;
};

// Use interface for behavior contracts
interface UserService {
	create(userData: User): Promise<User>;
	update(id: string, data: Partial<User>): Promise<User>;
	delete(id: string): Promise<void>;
}
```

## 📁 Component Implementation Guidelines

### src/components/ (Reusable Components)

```
components/
├── button/
│   ├── index.tsx          # Main component
│   ├── styles.css.ts      # Vanilla Extract styles
│   └── button.test.tsx    # Tests
```

**Implementation Example:**

```typescript
// index.tsx
import { buttonBase, buttonPrimary, buttonSecondary } from "./styles.css";

type ButtonProps = {
	children: ReactNode;
	variant?: "primary" | "secondary";
	onClick?: () => void;
};

export const Button = ({ children, variant = "primary", onClick }: ButtonProps) => {
	const className = variant === "primary" ? buttonPrimary : buttonSecondary;

	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	);
};
```

### src/app/\_components/ (Page-specific Components)

- Components used only in specific pages
- Create `_components` directory at the same level as `page.tsx`
- Move to `src/components` when reusability becomes apparent

## 🎨 Themes Directory Guidelines

### Purpose

The `src/themes/` directory manages global styling, design tokens, and theme switching functionality.

### Structure & Responsibilities

```
themes/
├── tokens/
│   ├── colors.css.ts      # Color design tokens
│   ├── spacing.css.ts     # Spacing scale
│   ├── typography.css.ts  # Font definitions
│   └── breakpoints.css.ts # Responsive breakpoints
├── contracts/
│   ├── theme.css.ts       # Theme contract definitions
│   └── variants.css.ts    # Theme variant implementations
├── providers/
│   ├── theme-provider.tsx # React context provider
│   └── theme-context.ts   # Theme context definition
├── reset.css.ts           # Global CSS reset
└── global.css.ts          # Global application styles
```

### Implementation Examples

```typescript
// themes/tokens/colors.css.ts
import { createThemeContract } from "@vanilla-extract/css";

export const colors = createThemeContract({
	primary: null,
	secondary: null,
	background: null,
	text: null,
});

// themes/contracts/theme.css.ts
import { createTheme } from "@vanilla-extract/css";
import { colors } from "../tokens/colors.css";

export const lightTheme = createTheme(colors, {
	primary: "#0070f3",
	secondary: "#f4f4f4",
	background: "#ffffff",
	text: "#000000",
});

export const darkTheme = createTheme(colors, {
	primary: "#0070f3",
	secondary: "#333333",
	background: "#000000",
	text: "#ffffff",
});
```

## 🔧 Utils Directory Guidelines

### Purpose

The `src/utils/` directory contains pure utility functions with no UI or styling dependencies.

### Strict Requirements

1. **Functional Design**: All utilities must be pure functions
2. **Feature-based Organization**: Group by functionality, not by type
3. **Mandatory TDD**: Every feature must have `index.ts` and `<feature>.test.ts`
4. **No Side Effects**: Functions should not cause side effects

### Structure Requirements

```
utils/
├── <feature-name>/
│   ├── index.ts           # Main exports (REQUIRED)
│   └── <feature>.test.ts  # TDD tests (REQUIRED)
```

### Implementation Examples

```typescript
// utils/date/index.ts
export const formatDate = (date: Date, format: string): string => {
	// Pure function implementation
};

export const addDays = (date: Date, days: number): Date => {
	return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
};

export const isWeekend = (date: Date): boolean => {
	const day = date.getDay();
	return day === 0 || day === 6;
};

// utils/date/date.test.ts
import { describe, it, expect } from "vitest";
import { formatDate, addDays, isWeekend } from "./index";

describe("date utilities", () => {
	it("should format date correctly", () => {
		const date = new Date("2025-01-15");
		expect(formatDate(date, "YYYY-MM-DD")).toBe("2025-01-15");
	});

	it("should add days correctly", () => {
		const date = new Date("2025-01-15");
		const result = addDays(date, 3);
		expect(result.getDate()).toBe(18);
	});

	it("should identify weekend correctly", () => {
		const saturday = new Date("2025-01-18"); // Saturday
		const monday = new Date("2025-01-20"); // Monday
		expect(isWeekend(saturday)).toBe(true);
		expect(isWeekend(monday)).toBe(false);
	});
});
```

### Utils Best Practices

- Functions must be stateless and deterministic
- No dependencies on React, DOM, or external services
- Use TypeScript for comprehensive type safety
- Follow TDD: Red → Green → Refactor cycle
- Each utility should have a single responsibility

## 🔗 Path Management

### TypeScript Aliases

```typescript
// Configured in tsconfig.json
{
  "@components/*": ["./src/components/*"],
  "@themes/*": ["./src/themes/*"],
  "@assets/*": ["./src/assets/*"],
  "@utils/*": ["./src/utils/*"],
  "@adapters/*": ["./src/adapters/*"]
}
```

### Usage Examples

```typescript
// ✅ Recommended
import { Button } from "@components/button";
import { colors } from "@theme/colors";
import { formatDate } from "@utils/date";
import dayjs from "dayjs";

// ✅ Side effect import for dayjs configuration
import "@adapters/date";

// ✅ Relative paths OK for child directories
import { HeroSection } from "./_components/hero-section";

// ❌ Forbidden: Relative paths to parent directories
import { Button } from "../../../components/button";
```

## 🚀 Project-Specific Architecture Notes

### Current Implementation Status

The project is currently in development with the following key components implemented:

1. **Enhanced Image Component** (`src/components/image/index.tsx`):

   - Client-side wrapper around Next.js Image
   - Built-in loading state management
   - Custom placeholder handling with blur effects
   - Follows strict ESLint rules with useCallback patterns

2. **Theme System** (`src/themes/`):

   - Simple ThemeProvider with optional asChild prop using Radix Slot
   - Global CSS imports through provider
   - Clean theme architecture ready for expansion

3. **Route Structure**:
   - Home page at root (`/`)
   - Birthday celebration content in route group `(birthday)/2025/`
   - Clean separation of concerns

### Key Dependencies

- **@radix-ui/react-slot**: Used for composable component patterns
- **@acab/reset.css**: CSS reset library
- **dayjs**: Date/time manipulation (configured for Asia/Tokyo timezone)
- **motion**: Animation library (when used, must follow motion transition rules)

### Development Notes

- The project uses React 19 features and Next.js 15
- All components follow strict immutability patterns
- TDD is mandatory for all utility functions
- Quality checks are automated and must pass before commits
