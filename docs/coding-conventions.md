# Coding Conventions

## 💻 Immutable Programming

### Absolutely Forbidden

- Using `let` keyword
- Using non-null assertion operator (`!`)
- Using `forEach()` method

### Recommended Patterns

```typescript
// Variable declaration with const only
const value = condition ? calculateValue() : undefined;

// Array/object updates with spread operator
const updatedArray = [...originalArray, newItem];
const updatedObject = { ...original, property: newValue };
```

## 🔒 Safe Array Access

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

## 🔄 Loop Implementation

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

## 📝 Vanilla Extract Import and Export Conventions

### Correct Import Pattern

```typescript
// Always use namespace import with 'styles' alias
import * as styles from "./styles.css";

// Usage in component
<div className={styles.container}>
```

### Incorrect Named Imports

```typescript
// ❌ Don't use named imports
import { containerStyles, buttonStyles } from "./styles.css";
```

### Export Naming (No redundant 'styles' suffix)

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

### Root Element and Container Naming Conventions

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

## 🎯 Vanilla Extract Selectors Restrictions

**CRITICAL: Vanilla Extract has strict limitations on selectors usage**

### Forbidden selector patterns

```typescript
// ❌ Don't use child selectors in selectors object
export const card = style({
	selectors: {
		"& h3": { fontSize: "1.5rem" }, // ERROR: Invalid selector
		"& p": { color: "#333" }, // ERROR: Invalid selector
		"& .child-class": { margin: "1rem" }, // ERROR: Invalid selector
	},
});
```

### Correct approach - Individual styles

```typescript
// ✅ Create separate styles for each element
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

### Allowed selector patterns

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

## 🔧 Component Granularity and Style Naming

**CRITICAL: When style names become 3+ words, component needs refactoring**

### Bad - Component too large

```typescript
// ❌ styles.css.ts with complex naming indicates oversized component
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

### Good - Break into subcomponents

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

### Refactored styles

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

### Component Structure Rules

1. **3+ word style names** = Component needs breaking down
2. **Subcomponent directory structure**: `components/parent/child/`
3. **Required files in each subcomponent**:
   - `index.tsx` - Component implementation
   - `styles.css.ts` - Component-specific styles
   - `<component-name>.test.tsx` - Component tests
4. **Style naming**: Each subcomponent starts fresh with `root`, `title`, etc.
5. **Import pattern**: Parent imports subcomponents from their directories

### Universal CSS File Rules

**IMPORTANT: These same constraints apply to ALL CSS files:**

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

## 🔄 useEffect Usage Restrictions

**CRITICAL: useEffect usage is strictly limited in this project**

### Allowed useEffect usage (with mandatory comment)

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

### Forbidden useEffect patterns

```typescript
// ❌ Don't use useEffect for state initialization
useEffect(() => {
	setData(calculateInitialData());
}, []);

// ✅ Instead use useState with lazy initialization
const [data] = useState(() => calculateInitialData());

// ❌ Don't use useEffect for derived state
useEffect(() => {
	setFilteredItems(items.filter((item) => item.active));
}, [items]);

// ✅ Instead use useMemo or direct calculation
const filteredItems = useMemo(() => items.filter((item) => item.active), [items]);
```

### When to use useEffect (with required comment explaining why)

- DOM manipulation that cannot be achieved through React patterns
- Setting up external subscriptions (WebSocket, EventSource, etc.)
- Cleanup of external resources
- Integration with non-React libraries that require imperative APIs

## 🖥️ Server vs Client Components

**CRITICAL: Server Components should be used by default**

### Server Component (Default - No "use client" directive needed)

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

### Client Component (Only when necessary with mandatory comment)

```typescript
// REQUIRED COMMENT: Why this must be a Client Component
// This component uses motion animations which require client-side JavaScript
"use client";

import { motion } from "motion/react";

export const AnimatedButton = () => {
	return <motion.button whileHover={{ scale: 1.05 }}>Click me</motion.button>;
};
```

### When Client Components are required (with mandatory comment explaining why)

- Interactive state management (useState, useReducer)
- Browser APIs (localStorage, geolocation, etc.)
- Event handlers that require JavaScript
- Animation libraries (motion/framer-motion)
- Third-party libraries that require client-side execution
- useEffect for side effects

### Guidelines

- Start with Server Components by default
- Only add "use client" when you have a specific technical reason
- Always comment why the component must be client-side
- Keep Client Components as small as possible
- Consider splitting components: Server Component wrapper with Client Component for interactive parts

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
