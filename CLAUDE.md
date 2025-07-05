# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# RISTILL ANNIVERSARY 2025 - Implementation Guidelines

## 📋 Quick Reference

This project follows strict coding conventions and quality standards. For detailed information, refer to:

- **@docs/tech-stack.md** - Tech stack, project structure, and architecture
- **@docs/coding-conventions.md** - Immutable programming, Vanilla Extract, React patterns
- **@docs/styling.md** - Vanilla Extract styling, TypeScript type safety, ESLint rules
- **@docs/testing.md** - TDD strategy, quality management, testing patterns
- **@docs/development.md** - Development workflow, commands, deployment

## 🚨 Critical Rules (Must Follow)

### Immutable Programming (Absolutely Forbidden)

- Using `let` keyword
- Using non-null assertion operator (`!`)
- Using `forEach()` method

### Vanilla Extract Conventions

```typescript
// ✅ Always use namespace import
import * as styles from "./styles.css";

// ✅ Root element naming
export const root = style({
	/* main container */
});
export const headerRoot = style({
	/* header container */
});

// ❌ Forbidden: Child selectors in selectors object
export const card = style({
	selectors: {
		"& h3": { fontSize: "1.5rem" }, // ERROR: Invalid
	},
});
```

### Component Granularity Rule

**When style names become 3+ words, component needs refactoring**

```typescript
// ❌ Component too large
export const messageWallItemTimestamp = style({});

// ✅ Break into subcomponents
// components/message-form/message-item/styles.css.ts
export const timestamp = style({});
```

### useEffect Restrictions

**useEffect is ONLY for actual side effects (with mandatory comment)**

```typescript
// ✅ Allowed with comment
useEffect(() => {
	// REQUIRED COMMENT: Setting up WebSocket connection for real-time updates
	const socket = new WebSocket(url);
	return () => socket.close();
}, []);

// ❌ Forbidden: Use useState lazy initialization instead
useEffect(() => {
	setData(calculateInitialData());
}, []);
```

### Server vs Client Components

**Server Components by default. Client Components only when necessary with mandatory comment**

```typescript
// ✅ Client Component with comment
// REQUIRED COMMENT: Uses motion animations requiring client-side JavaScript
"use client";
import { motion } from "motion/react";
```

### ESLint Event Handler Rules

**No arrow functions or .bind() in JSX - Use useCallback**

```typescript
// ❌ Forbidden
<button onClick={() => handleClick()}>

// ✅ Required
const handleClick = useCallback(() => {
  // Handle click logic
}, []);
<button onClick={handleClick}>
```

## 📅 Date/Time Handling

**ALWAYS use dayjs, NEVER native Date objects**

```typescript
import dayjs from "dayjs";
// ✅ Good
const now = dayjs();
const formatted = now.format("YYYY-MM-DD");

// ❌ Bad
const now = new Date();
```

## 🎨 Motion.js Transitions

**Use default property wrapper to avoid TypeScript errors**

```typescript
// ✅ Correct
<motion.div
  transition={{ default: { duration: 1, delay: 0.2 } }}
>

// ❌ Incorrect - causes TypeScript errors
<motion.div
  transition={{ duration: 1, delay: 0.2 }}
>
```

## 📦 Quality Commands (Always Run After Work)

```bash
# Full quality check (MANDATORY after completing any work)
pnpm lint && pnpm typecheck && pnpm test

# If lint fails, try auto-formatting first
pnpm fmt && pnpm lint && pnpm typecheck && pnpm test

# Run specific test after editing files with tests
pnpm exec vitest run <test-file>
```

## 🔗 Import Paths

```typescript
// ✅ Use TypeScript aliases
import { Button } from "@components/button";
import { formatDate } from "@utils/date";
import "@adapters/date"; // Side effect import for dayjs config

// ❌ Forbidden: Relative paths to parent directories
import { Button } from "../../../components/button";
```

## 🌐 Language Rules (CRITICAL)

- **User communication**: Always use Japanese
- **Documents for user**: Write in Japanese
- **Documents for Claude**: Write in English (like this CLAUDE.md)
- **Internal thinking**: Think in English

## 🚫 Forbidden Practices

1. Using `let` keyword
2. Using non-null assertion (`!`)
3. Using `forEach()` method
4. Relative path imports to parent directories
5. Type `any` (strictly forbidden)
6. Violating language rules

## 🧪 TDD Workflow for Utils

When adding new utils, follow strict TDD:

1. Create `<feature>.test.ts` first
2. Write failing tests (Red)
3. Implement minimal code (Green)
4. Run: `pnpm exec vitest <test-file> --watch`
5. Refactor while keeping tests green
6. Run: `pnpm exec vitest run <test-file>` after each edit
7. Final: `pnpm lint && pnpm typecheck && pnpm test`

## 🔧 Tech Stack Summary

- **Framework**: Next.js 15.3.3 (App Router)
- **React**: 19.1.0
- **Styling**: Vanilla Extract CSS
- **Testing**: Vitest
- **Package Manager**: pnpm
- **TypeScript**: 5.5.2
- **Deployment**: Cloudflare Workers

## 📁 Project Structure Key Points

```
src/
├── app/                 # Next.js App Router pages
│   ├── (birthday)/2025/ # 2025 anniversary content
│   └── _components/     # Page-specific components
├── components/          # Reusable components
├── themes/              # Global styling system
├── utils/               # Pure functions (TDD required)
├── adapters/            # External library adapters
└── assets/              # Static resources
```

For complete details on any topic, refer to the specific documentation files in @docs/.
