# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# RISTILL ANNIVERSARY 2025 - Implementation Guidelines and Rules

This document outlines the implementation guidelines and coding conventions for this project.

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

## 💻 Coding Conventions

### Immutable Programming

**❌ Absolutely Forbidden**

- Using `let` keyword
- Using non-null assertion operator (`!`)
- Using `forEach()` method

**✅ Recommended Patterns**

```typescript
// Variable declaration with const only
const value = condition ? calculateValue() : undefined;

// Array/object updates with spread operator
const updatedArray = [...originalArray, newItem];
const updatedObject = { ...original, property: newValue };
```

### Safe Array Access

```typescript
// ❌ Unsafe access
const firstItem = array[0]; // Might be undefined

// ✅ Safe access
const [firstItem] = array;
if (firstItem !== undefined) {
	console.log(firstItem.property);
}

// Or using at() method
const lastItem = array.at(-1);
if (lastItem !== undefined) {
	console.log(lastItem.property);
}
```

### Loop Implementation

```typescript
// ❌ Forbidden
array.forEach((item) => {
	/* ... */
});

// ✅ Recommended
for (const item of array) {
	console.log(item);
}

// When index is needed
for (const [index, item] of array.entries()) {
	console.log(index, item);
}
```

### Vanilla Extract Import and Export Conventions

**✅ Correct Import Pattern**

```typescript
// Always use namespace import with 'styles' alias
import * as styles from "./styles.css";

// Usage in component
<div className={styles.container}>
```

**❌ Incorrect Named Imports**

```typescript
// Don't use named imports
import { containerStyles, buttonStyles } from "./styles.css";
```

**✅ Export Naming (No redundant 'styles' suffix)**

```typescript
// styles.css.ts
import { style } from "@vanilla-extract/css";

// ✅ Good - Clean naming
export const root = style({
	padding: "1rem",
});

export const button = style({
	border: "none",
});

// ❌ Bad - Redundant naming
export const rootStyles = style({
	padding: "1rem",
});

export const buttonStyles = style({
	border: "none",
});
```

**✅ Root Element and Container Naming Conventions**

```typescript
// styles.css.ts
import { style } from "@vanilla-extract/css";

// ✅ Good - Root element naming
export const root = style({
	// Main container/wrapper for the component
	minHeight: "100vh",
	padding: "2rem",
});

export const headerRoot = style({
	// Header container
	display: "flex",
	alignItems: "center",
});

export const contentRoot = style({
	// Content wrapper
	maxWidth: "1200px",
	margin: "0 auto",
});

// ❌ Bad - Inconsistent container naming
export const section = style({
	/* ... */
});
export const container = style({
	/* ... */
});
export const wrapper = style({
	/* ... */
});
export const headerContainer = style({
	/* ... */
});
export const contentWrapper = style({
	/* ... */
});
```

**Naming Rules:**

- **Root element**: Always use `root` for the main/top-level style in each component
- **Sub-containers**: Use `xxxRoot` pattern (e.g., `headerRoot`, `contentRoot`, `sidebarRoot`)
- **Avoid**: `container`, `wrapper`, `xxxContainer`, `xxxWrapper`
- **Consistency**: All layout/wrapper elements should follow the `xxxRoot` pattern

### Vanilla Extract Selectors Restrictions

**CRITICAL: Vanilla Extract has strict limitations on selectors usage**

**❌ Forbidden selector patterns:**

```typescript
// Don't use child selectors in selectors object
export const card = style({
	selectors: {
		"& h3": { fontSize: "1.5rem" }, // ERROR: Invalid selector
		"& p": { color: "#333" }, // ERROR: Invalid selector
		"& .child-class": { margin: "1rem" }, // ERROR: Invalid selector
	},
});
```

**✅ Correct approach - Individual styles:**

```typescript
// Create separate styles for each element
export const card = style({
	padding: "1rem",
	background: "white",
});

export const cardTitle = style({
	fontSize: "1.5rem",
	color: "#333",
	marginBottom: "1rem",
});

export const cardText = style({
	color: "#666",
	lineHeight: 1.6,
});

// Usage in component
<div className={styles.card}>
	<h3 className={styles.cardTitle}>Title</h3>
	<p className={styles.cardText}>Text</p>
</div>
```

**✅ Allowed selector patterns:**

```typescript
export const button = style({
	selectors: {
		"&:hover": { backgroundColor: "#blue" }, // ✅ Pseudo-selectors OK
		"&:focus": { outline: "2px solid #blue" }, // ✅ Pseudo-selectors OK
		"&[disabled]": { opacity: 0.5 }, // ✅ Attribute selectors OK
	},
});
```

**Guidelines:**

- Always create individual style exports for nested elements
- Use semantic naming: `cardTitle`, `cardText`, `cardButton`
- Apply styles directly to elements in JSX, not through parent selectors
- Use pseudo-selectors (`:hover`, `:focus`) and attribute selectors (`[disabled]`) in selectors object only

### Component Granularity and Style Naming

**CRITICAL: When style names become 3+ words, component needs refactoring**

**❌ Bad - Component too large:**

```typescript
// styles.css.ts with complex naming indicates oversized component
export const messageWallTitle = style({
	/* ... */
});
export const messageWallContainer = style({
	/* ... */
});
export const messageWallItemIcon = style({
	/* ... */
});
export const messageWallItemText = style({
	/* ... */
});
export const messageWallItemTimestamp = style({
	/* ... */
});
```

**✅ Good - Break into subcomponents:**

```
components/message-form/
├── index.tsx                    # Main MessageForm component
├── styles.css.ts               # Main component styles only
├── message-form.test.tsx       # Main component tests
├── message-wall/               # Subcomponent directory
│   ├── index.tsx              # MessageWall component
│   ├── styles.css.ts          # MessageWall specific styles
│   └── message-wall.test.tsx  # MessageWall tests
└── message-item/              # Subcomponent directory
    ├── index.tsx              # MessageItem component
    ├── styles.css.ts          # MessageItem specific styles
    └── message-item.test.tsx  # MessageItem tests
```

**Refactored styles:**

```typescript
// components/message-form/styles.css.ts
export const root = style({
	/* ... */
});
export const form = style({
	/* ... */
});
export const input = style({
	/* ... */
});

// components/message-form/message-wall/styles.css.ts
export const root = style({
	/* ... */
});
export const title = style({
	/* ... */
});
export const list = style({
	/* ... */
});

// components/message-form/message-item/styles.css.ts
export const root = style({
	/* ... */
});
export const icon = style({
	/* ... */
});
export const text = style({
	/* ... */
});
export const timestamp = style({
	/* ... */
});
```

**Component Structure Rules:**

1. **3+ word style names** = Component needs breaking down
2. **Subcomponent directory structure**: `components/parent/child/`
3. **Required files in each subcomponent**:
   - `index.tsx` - Component implementation
   - `styles.css.ts` - Component-specific styles
   - `<component-name>.test.tsx` - Component tests
4. **Style naming**: Each subcomponent starts fresh with `root`, `title`, etc.
5. **Import pattern**: Parent imports subcomponents from their directories

**IMPORTANT: These same constraints apply to ALL CSS files:**

**Universal CSS File Rules:**

- `styles.css.ts` (component styles)
- `layout.css.ts` (layout styles)
- `page.css.ts` (page-specific styles)
- Any `*.css.ts` file in the project

**All CSS files must follow:**

1. **Root element naming**: Use `root` for main/top-level style
2. **No child selectors**: No `"& h3"`, `"& p"`, `"& .class"` in selectors object
3. **Individual exports**: Create separate exports for each styled element
4. **3+ word limit**: Break into subcomponents when style names exceed 2 words
5. **Consistent imports**: Always use `import * as styles from "./styles.css"`

**Examples for different file types:**

```typescript
// layout.css.ts
export const root = style({
	/* main layout */
});
export const header = style({
	/* header styles */
});
export const main = style({
	/* main content */
});
export const footer = style({
	/* footer styles */
});

// page.css.ts
export const root = style({
	/* page container */
});
export const hero = style({
	/* hero section */
});
export const content = style({
	/* content area */
});

// styles.css.ts (component)
export const root = style({
	/* component root */
});
export const title = style({
	/* component title */
});
export const button = style({
	/* component button */
});
```

**Violation examples requiring refactoring:**

```typescript
// ❌ Bad - Any CSS file with these patterns needs refactoring
export const headerNavigationMenuItem = style({
	/* 4 words - too complex */
});
export const footerSocialMediaIcon = style({
	/* 4 words - too complex */
});
export const pageHeroCallToActionButton = style({
	/* 5 words - too complex */
});

// ❌ Bad - Child selectors in any CSS file
export const card = style({
	selectors: {
		"& h2": {
			/* Invalid in ANY CSS file */
		},
		"& .icon": {
			/* Invalid in ANY CSS file */
		},
	},
});
```

**Example refactoring:**

```typescript
// Before: Large component
const MessageForm = () => (
  <div className={styles.root}>
    <div className={styles.messageWall}>
      <h3 className={styles.messageWallTitle}>Messages</h3>
      <div className={styles.messageWallItemContainer}>
        <span className={styles.messageWallItemIcon}>💕</span>
        <span className={styles.messageWallItemText}>Message</span>
      </div>
    </div>
  </div>
);

// After: Broken into subcomponents
const MessageForm = () => (
  <div className={styles.root}>
    <MessageWall />
  </div>
);

// message-wall/index.tsx
const MessageWall = () => (
  <div className={styles.root}>
    <h3 className={styles.title}>Messages</h3>
    <MessageItem />
  </div>
);

// message-item/index.tsx
const MessageItem = () => (
  <div className={styles.root}>
    <span className={styles.icon}>💕</span>
    <span className={styles.text}>Message</span>
  </div>
);
```

### useEffect Usage Restrictions

**CRITICAL: useEffect usage is strictly limited in this project**

**✅ Allowed useEffect usage (with mandatory comment)**

```typescript
// useEffect should ONLY be used for actual side effects
useEffect(() => {
	// REQUIRED COMMENT: Why this side effect is necessary
	// Example: "Setting up WebSocket connection for real-time updates"
	const socket = new WebSocket(url);

	return () => {
		socket.close();
	};
}, []);
```

**❌ Forbidden useEffect patterns**

```typescript
// Don't use useEffect for state initialization
useEffect(() => {
	setData(calculateInitialData());
}, []);

// Instead use useState with lazy initialization
const [data] = useState(() => calculateInitialData());

// Don't use useEffect for derived state
useEffect(() => {
	setFilteredItems(items.filter((item) => item.active));
}, [items]);

// Instead use useMemo or direct calculation
const filteredItems = useMemo(() => items.filter((item) => item.active), [items]);
```

**When to use useEffect (with required comment explaining why):**

- DOM manipulation that cannot be achieved through React patterns
- Setting up external subscriptions (WebSocket, EventSource, etc.)
- Cleanup of external resources
- Integration with non-React libraries that require imperative APIs

### Server vs Client Components

**CRITICAL: Server Components should be used by default**

**✅ Server Component (Default - No "use client" directive needed)**

```typescript
// No "use client" directive = Server Component by default
export const StaticProfile = ({ user }: { user: User }) => {
	return (
		<div>
			<h1>{user.name}</h1>
			<p>{user.bio}</p>
		</div>
	);
};
```

**✅ Client Component (Only when necessary with mandatory comment)**

```typescript
// REQUIRED COMMENT: Why this must be a Client Component
// This component uses motion animations which require client-side JavaScript
"use client";

import { motion } from "motion/react";

export const AnimatedButton = () => {
	return <motion.button whileHover={{ scale: 1.05 }}>Click me</motion.button>;
};
```

**When Client Components are required (with mandatory comment explaining why):**

- Interactive state management (useState, useReducer)
- Browser APIs (localStorage, geolocation, etc.)
- Event handlers that require JavaScript
- Animation libraries (motion/framer-motion)
- Third-party libraries that require client-side execution
- useEffect for side effects

**Guidelines:**

- Start with Server Components by default
- Only add "use client" when you have a specific technical reason
- Always comment why the component must be client-side
- Keep Client Components as small as possible
- Consider splitting components: Server Component wrapper with Client Component for interactive parts

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

## 📅 Date/Time Handling Guidelines

### dayjs Usage Requirements

- **ALWAYS use dayjs for all date/time operations**
- **NEVER use native Date objects directly in application code**
- Use the `@adapters/date` module for all date operations
- Configure timezone in `layout.tsx` using `dateAdapter.setDefaultTimezone()`

### dayjs Usage

```typescript
// Import dayjs directly in utils
import dayjs, { type Dayjs } from "dayjs";

// ✅ Good - Using dayjs directly
const now = dayjs();
const parsedDate = dayjs("2025-01-15");
const formatted = now.format("YYYY-MM-DD");
const isWeekend = parsedDate.day() === 0 || parsedDate.day() === 6;

// ❌ Bad - Using native Date
const now = new Date();
const parsed = new Date("2025-01-15");
```

### Timezone Configuration

The timezone and plugins are configured as side effects in `@adapters/date`:

```typescript
// src/app/layout.tsx
import "@adapters/date"; // Side effect import

// src/test/setup.ts
import "@adapters/date"; // Side effect import for tests

// This automatically configures:
// - dayjs plugins (utc, timezone, customParseFormat, etc.)
// - Default timezone: Asia/Tokyo
```

### Available dayjs Operations

dayjs provides extensive date manipulation:

- Parsing: `dayjs()`, `dayjs(string, format)`
- Formatting: `.format()`
- Arithmetic: `.add()`, `.subtract()`
- Comparison: `.isBefore()`, `.isAfter()`, `.isSame()`
- Validation: `.isValid()`
- Utilities: `.day()`, `.startOf()`, `.endOf()`
- Timezone: `.tz()`, `.utc()`

## 🎨 Styling (Vanilla Extract)

**Allowed Packages**

- `@vanilla-extract/css`
- `@vanilla-extract/css-utils`
- `@vanilla-extract/dynamic`

**Packages to Avoid**

- `@vanilla-extract/recipes` (do not use)
- `@vanilla-extract/sprinkles` (do not use)

```typescript
// styles.css.ts
import { style } from "@vanilla-extract/css";

export const buttonBase = style({
	padding: "12px 24px",
	border: "none",
	borderRadius: "8px",
	cursor: "pointer",
	fontSize: "16px",
	fontWeight: "600",
	transition: "all 0.2s ease-in-out",
});

export const buttonPrimary = style([
	buttonBase,
	{
		backgroundColor: "#0070f3",
		color: "white",
	},
]);

export const buttonSecondary = style([
	buttonBase,
	{
		backgroundColor: "#f4f4f4",
		color: "#333",
		border: "1px solid #ddd",
	},
]);
```

**Dynamic Styling Example**

```typescript
// When dynamic styles are needed
import { style } from '@vanilla-extract/css'
import { assignInlineVars } from '@vanilla-extract/dynamic'

export const dynamicButton = style({
  backgroundColor: 'var(--button-color)',
})

// Usage in component
<button
  className={dynamicButton}
  style={assignInlineVars({
    '--button-color': isActive ? '#0070f3' : '#f4f4f4'
  })}
>
  Button
</button>
```

### globalStyle Usage Restrictions

**CRITICAL: globalStyle usage is strictly limited and requires justification**

**❌ Forbidden - General styling:**

```typescript
// DO NOT use globalStyle for regular component styling
import { globalStyle } from "@vanilla-extract/css";

globalStyle(".my-component", {
	padding: "1rem",
	backgroundColor: "white",
}); // This should be a regular style() export
```

**✅ Allowed - Only for unavoidable global requirements (with mandatory comment):**

```typescript
import { globalStyle } from "@vanilla-extract/css";

// REQUIRED COMMENT: Using globalStyle because third-party library classes cannot be targeted otherwise
// This is the only way to override react-modal's default styles that are applied globally
globalStyle(".ReactModal__Content", {
	border: "none !important",
	borderRadius: "12px !important",
});

// REQUIRED COMMENT: Using globalStyle to reset browser defaults that affect layout calculations
// This ensures consistent box-sizing across all elements for responsive design
globalStyle("*, *::before, *::after", {
	boxSizing: "border-box",
});
```

**When globalStyle is allowed:**

- Overriding third-party library styles that cannot be targeted through component props
- Essential global resets that affect layout calculations
- Browser compatibility fixes that must be applied globally

**Guidelines:**

- Always include a detailed comment explaining why globalStyle is unavoidable
- Prefer component-specific styles with style() whenever possible
- Use specific selectors rather than broad global rules
- Avoid globalStyle for regular component styling

### Media Query Range Syntax

**CRITICAL: Always use modern media query range syntax**

**✅ Good - Modern range syntax:**

```typescript
// styles.css.ts
export const button = style({
	padding: "1rem",
	"@media": {
		"(width >= 768px)": {
			padding: "1.5rem",
		},
		"(768px <= width < 1024px)": {
			fontSize: "1.1rem",
		},
		"(width >= 1024px)": {
			fontSize: "1.2rem",
		},
	},
});
```

**❌ Bad - Legacy syntax:**

```typescript
// DO NOT use legacy min-width/max-width syntax
export const button = style({
	"@media": {
		"(min-width: 768px)": {
			// Legacy syntax - avoid
		},
		"(max-width: 1023px)": {
			// Legacy syntax - avoid
		},
	},
});
```

**Range syntax benefits:**

- More intuitive: `(width >= 768px)` is clearer than `(min-width: 768px)`
- Better range definitions: `(768px <= width < 1024px)` eliminates overlap
- Future-proof: Modern browsers support this syntax
- Less error-prone: Clear boundaries prevent media query conflicts

**Common patterns:**

```typescript
// Mobile-first approach
export const responsiveCard = style({
	padding: "1rem",
	"@media": {
		"(width >= 640px)": {
			padding: "1.5rem",
		},
		"(width >= 768px)": {
			padding: "2rem",
			display: "grid",
			gridTemplateColumns: "1fr 1fr",
		},
		"(width >= 1024px)": {
			padding: "3rem",
			gridTemplateColumns: "1fr 2fr 1fr",
		},
	},
});

// Specific range targeting
export const tabletOnly = style({
	display: "none",
	"@media": {
		"(768px <= width < 1024px)": {
			display: "block",
		},
	},
});
```

### TypeScript Type Safety

**CRITICAL: The `any` type is strictly forbidden**

**❌ Forbidden:**

```typescript
// NEVER use any type
const transition = { duration: 1 } as any;
const props: any = { ... };
function handler(event: any) { ... }
```

**✅ Alternatives:**

```typescript
// Use proper typing or type assertions with specific types
import type { Transition } from "motion/react";

const transition: Transition = { duration: 1 };

// For complex motion transitions, use specific type assertions
const motionTransition = {
  duration: 1,
  delay: 0.2
} as Transition;

// For event handlers, use proper React types
function handler(event: React.MouseEvent<HTMLButtonElement>) { ... }

// For unknown external data, use unknown and type guards
function processData(data: unknown) {
  if (typeof data === 'object' && data !== null) {
    // Type narrowing with guards
  }
}
```

**Type safety best practices:**

- Always define proper interfaces and types
- Use type assertions only with specific types, never `any`
- Implement type guards for unknown data
- Use generic types for reusable components
- Prefer `unknown` over `any` for truly unknown data

### TypeScript `satisfies` vs Type Assertions

**CRITICAL: Prefer `satisfies` over `as` type assertions**

**✅ Good - Use satisfies for type safety (general cases):**

```typescript
// Object literals with satisfies get better type checking
const themeConfig = {
	colors: {
		primary: "#0070f3",
		secondary: "#f4f4f4",
	},
	spacing: {
		small: "0.5rem",
		medium: "1rem",
	},
} satisfies ThemeConfig;

// CSS properties with satisfies
const buttonStyles = {
	padding: "12px 24px",
	borderRadius: "8px",
	cursor: "pointer",
} satisfies CSSProperties;
```

**✅ Motion Transition Proper Usage:**

motion/reactライブラリでtransition propsを使用する際は、`default`プロパティでラップすることで型エラーを回避：

```typescript
// ✅ Correct approach - use default property wrapper
import { motion } from "motion/react";

<motion.div
  transition={{ default: { duration: 1, delay: 0.2 } }}
  // TypeScript型エラーなし、正常動作
>

// ✅ Complex transitions with default wrapper
<motion.div
  transition={{ default: {
    duration: 3,
    delay: Math.random() * 2,
    repeat: Infinity,
    repeatDelay: Math.random() * 3,
  }}}
>

// ❌ Incorrect - direct object without default wrapper
<motion.div
  transition={{ duration: 1, delay: 0.2 }}
  // TypeScript型エラーが発生
>
```

**重要事項:**

- 全てのtransition propsは`default`プロパティでラップする
- この方法でTypeScriptエラーを完全に回避可能
- 実行時の動作も正常で、アニメーション品質に影響なし

**❌ Bad - Type assertions lose type safety:**

```typescript
// Type assertions (as) lose original type information
const transition = {
	duration: 1,
	delay: 0.2,
} as Transition; // TypeScript can't catch property typos

// No IntelliSense for properties
const config = {
	colors: { primary: "#0070f3" },
	spacng: "1rem", // Typo not caught!
} as ThemeConfig;
```

**Benefits of satisfies:**

- **Type preservation**: Original object type is maintained
- **Better IntelliSense**: IDE can provide accurate autocomplete
- **Error catching**: TypeScript catches property name typos
- **Type narrowing**: More precise type inference

**When to use each:**

```typescript
// Use satisfies for object literals and configurations
const buttonStyles = {
	padding: "1rem",
	borderRadius: "0.5rem",
} satisfies CSSProperties;

// Use type assertions only when TypeScript can't infer the correct type
const element = document.getElementById("button") as HTMLButtonElement;

// Use satisfies for complex nested objects
const apiConfig = {
	endpoints: {
		users: "/api/users",
		posts: "/api/posts",
	},
	methods: ["GET", "POST", "PUT"],
	timeout: 5000,
} satisfies APIConfiguration;
```

**Motion.js specific usage:**

```typescript
import type { Transition, AnimationProps } from "motion/react";

// Motion transitions with satisfies
const slideIn = {
	initial: { x: -100, opacity: 0 },
	animate: { x: 0, opacity: 1 },
	transition: {
		duration: 0.5,
		ease: "easeOut",
	} satisfies Transition,
} satisfies AnimationProps;

// Complex animation sequences
const staggeredFade = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			staggerChildren: 0.1,
		} satisfies Transition,
	},
} satisfies Variants;
```

### ESLint Event Handler Rules

**CRITICAL: react/jsx-no-bind rule compliance**

**❌ Forbidden - Arrow functions and bind in JSX:**

```typescript
// Don't use arrow functions directly in JSX
<button onClick={() => handleClick()}>Click</button>

// Don't use .bind() in JSX
<button onClick={handleClick.bind(this, id)}>Click</button>

// Don't use arrow functions with parameters in JSX
<button onClick={() => handleClickWithId(id)}>Click</button>
```

**✅ Solution 1 - useCallback for parameterless functions:**

```typescript
import { useCallback } from "react";

const MyComponent = () => {
  const handleClick = useCallback(() => {
    // Handle click logic
    console.log("Clicked");
  }, []);

  return <button onClick={handleClick}>Click</button>;
};
```

**✅ Solution 2 - Extract component for functions with parameters:**

```typescript
// ❌ Bad - Inline arrow function with parameter
const ItemList = ({ items }: { items: Item[] }) => (
  <div>
    {items.map((item) => (
      <button key={item.id} onClick={() => handleItemClick(item.id)}>
        {item.name}
      </button>
    ))}
  </div>
);

// ✅ Good - Extract ListItem component
const ItemList = ({ items }: { items: Item[] }) => (
  <div>
    {items.map((item) => (
      <ListItem key={item.id} item={item} onItemClick={handleItemClick} />
    ))}
  </div>
);

const ListItem = ({
  item,
  onItemClick
}: {
  item: Item;
  onItemClick: (id: string) => void;
}) => {
  const handleClick = useCallback(() => {
    onItemClick(item.id);
  }, [item.id, onItemClick]);

  return <button onClick={handleClick}>{item.name}</button>;
};
```

**✅ Solution 3 - Data attributes for simple cases:**

```typescript
// Alternative approach using data attributes
const ItemList = ({ items }: { items: Item[] }) => {
  const handleItemClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    const itemId = event.currentTarget.dataset.itemId;
    if (itemId) {
      // Handle click with itemId
    }
  }, []);

  return (
    <div>
      {items.map((item) => (
        <button
          key={item.id}
          data-item-id={item.id}
          onClick={handleItemClick}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
```

**Guidelines:**

1. **Always use useCallback** for event handlers to prevent unnecessary re-renders
2. **Extract components** when you need to pass parameters to event handlers
3. **Use data attributes** for simple parameter passing scenarios
4. **Prefer component extraction** over complex data attribute patterns
5. **Include dependencies** in useCallback dependency array

**Component extraction pattern:**

```typescript
// Parent component passes callback
const ParentComponent = () => {
  const handleAction = useCallback((id: string, action: string) => {
    // Handle the action
  }, []);

  return (
    <div>
      {items.map((item) => (
        <ChildComponent
          key={item.id}
          item={item}
          onAction={handleAction}
        />
      ))}
    </div>
  );
};

// Child component wraps callback with useCallback
const ChildComponent = ({
  item,
  onAction
}: {
  item: Item;
  onAction: (id: string, action: string) => void;
}) => {
  const handleEdit = useCallback(() => {
    onAction(item.id, 'edit');
  }, [item.id, onAction]);

  const handleDelete = useCallback(() => {
    onAction(item.id, 'delete');
  }, [item.id, onAction]);

  return (
    <div>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
```

## 🧪 Testing Strategy (TDD)

### TDD Cycle

1. **Red**: Write failing tests first
2. **Green**: Implement minimal code to pass tests
3. **Refactor**: Refactor while keeping tests green

### Test Execution

```bash
# Single run
pnpm exec vitest run

# Watch mode
pnpm exec vitest
```

### Test Exceptions

- `page.tsx` and `layout.tsx` do not require tests
- Focus on business logic and service layers

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

## 📦 Package Management & Development Commands

### Core Development Commands

```bash
# Installation
pnpm install

# Development server
pnpm dev

# Production build
pnpm build

# Production server
pnpm start

# Testing
pnpm test                    # Run all tests
pnpm test:watch             # Run tests in watch mode
pnpm exec vitest run <file> # Run specific test file
pnpm exec vitest <file> --watch # Watch specific test file

# Quality checks (CRITICAL - Always run after changes)
pnpm lint                   # ESLint + Prettier check
pnpm fmt                    # Auto-format code
pnpm typecheck              # TypeScript type checking

# Deployment
pnpm deploy                 # Deploy to Cloudflare
pnpm preview                # Preview deployment locally
```

### Quality Assurance Workflow

**MANDATORY: Run these commands after completing any work:**

```bash
# Full quality check sequence
pnpm lint && pnpm typecheck && pnpm test

# If lint fails, try auto-formatting first
pnpm fmt && pnpm lint && pnpm typecheck && pnpm test
```

## ⚡ Quality Management & Testing

**CRITICAL: Always follow these quality management practices**

### File-level Quality Checks

**When editing any file with associated tests, immediately run the specific test:**

```bash
# Run specific test file after editing
pnpm exec vitest run <test-file>

# Examples:
pnpm exec vitest run src/components/button/button.test.tsx
pnpm exec vitest run src/utils/date/date.test.ts
```

### Required Quality Commands

**CRITICAL: Always run these commands after completing any work:**

```bash
# 1. Code linting
pnpm lint

# If lint fails, try auto-formatting
pnpm fmt

# 2. Type checking
pnpm typecheck

# 3. Run all tests
pnpm test

# Optional: Production build verification
pnpm build
```

### TDD Development Workflow

**When adding new files with TDD (especially in utils/), follow this strict workflow:**

1. Create test file first (`<feature>.test.ts`)
2. Write failing tests (Red phase)
3. Implement minimal code (Green phase)
4. Run specific test continuously during development:
   ```bash
   pnpm exec vitest <test-file> --watch
   ```
5. Refactor while keeping tests green
6. **MANDATORY: Run specific test after each edit:**
   ```bash
   pnpm exec vitest run <test-file>
   ```
7. Run full quality checks before commit

**Example TDD workflow:**

```bash
# Step 1: Create test and watch it fail
pnpm exec vitest src/utils/date/date.test.ts --watch

# Step 2: Implement feature iteratively
# - Write minimal code
# - See test pass
# - Refactor
# - Run specific test: pnpm exec vitest run src/utils/date/date.test.ts
# - Repeat

# Step 3: Final quality check (MANDATORY)
pnpm lint && pnpm typecheck && pnpm test
```

### Quality Enforcement Rules

1. **File Edit → Test Run**: After editing any file with tests, immediately run `pnpm exec vitest run <test-file>`
2. **Work Completion → Full Check**: After completing any task, run `pnpm lint && pnpm typecheck && pnpm test`
3. **Commit Preparation**: Ensure all quality checks pass before any commit

This ensures high code quality, prevents regressions, and maintains project reliability.

## 🌐 Language Rules

**CRITICAL: This is an absolute requirement that must always be followed**

- **User communication**: Always use Japanese when communicating with the user
- **Documents for user**: Write in Japanese when creating documents intended for the user
- **Documents for Claude**: Write in English when creating documents for Claude (like this CLAUDE.md)
- **Internal thinking**: Think in English during problem-solving and implementation

This language separation ensures clear communication and proper documentation standards.

## 🚫 Forbidden Practices

1. Using `let` keyword
2. Using non-null assertion (`!`)
3. Using `forEach()` method
4. Relative path imports to parent directories
5. Redundant type information in variable names (e.g., `userObservable`, `buttonComponent`)
6. **Violating language rules** - This is a critical requirement

Following these conventions ensures a maintainable, type-safe, and testable codebase.

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
