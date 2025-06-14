# RISTILL ANNIVERSARY 2025 - Implementation Guidelines and Rules

This document outlines the implementation guidelines and coding conventions for this project.

## 🔧 Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Vanilla Extract CSS
- **Testing**: Vitest
- **Package Manager**: pnpm
- **Type System**: TypeScript

## 📦 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Layout (with timezone configuration)
│   └── _components/       # Page-specific components
├── components/            # Reusable components
├── themes/                # Global styling and theme system
│   ├── tokens/            # Design tokens (colors, spacing, typography)
│   ├── contracts/         # Theme contracts for switching
│   ├── providers/         # ThemeProvider and context
│   ├── reset.css.ts       # CSS reset styles
│   └── global.css.ts      # Global styles
├── adapters/              # External library adapters
│   └── date.ts            # dayjs adapter with timezone support
├── utils/                 # Pure utility functions
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

// Use IIFE for complex conditions
const result = (() => {
  if (complexCondition) {
    return calculateComplexValue();
  }
  return defaultValue;
})();

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
array.forEach((item) => { /* ... */ });

// ✅ Recommended
for (const item of array) {
  console.log(item);
}

// When index is needed
for (const [index, item] of array.entries()) {
  console.log(index, item);
}
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
import { buttonBase, buttonPrimary, buttonSecondary } from './styles.css'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
}

export const Button = ({ children, variant = 'primary', onClick }: ButtonProps) => {
  const className = variant === 'primary' ? buttonPrimary : buttonSecondary;
  
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}
```

### src/app/_components/ (Page-specific Components)

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
import { createThemeContract } from '@vanilla-extract/css'

export const colors = createThemeContract({
  primary: null,
  secondary: null,
  background: null,
  text: null,
})

// themes/contracts/theme.css.ts
import { createTheme } from '@vanilla-extract/css'
import { colors } from '../tokens/colors.css'

export const lightTheme = createTheme(colors, {
  primary: '#0070f3',
  secondary: '#f4f4f4',
  background: '#ffffff',
  text: '#000000',
})

export const darkTheme = createTheme(colors, {
  primary: '#0070f3',
  secondary: '#333333',
  background: '#000000',
  text: '#ffffff',
})
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
}

export const addDays = (date: Date, days: number): Date => {
  return new Date(date.getTime() + days * 24 * 60 * 60 * 1000)
}

export const isWeekend = (date: Date): boolean => {
  const day = date.getDay()
  return day === 0 || day === 6
}

// utils/date/date.test.ts
import { describe, it, expect } from 'vitest'
import { formatDate, addDays, isWeekend } from './index'

describe('date utilities', () => {
  it('should format date correctly', () => {
    const date = new Date('2025-01-15')
    expect(formatDate(date, 'YYYY-MM-DD')).toBe('2025-01-15')
  })

  it('should add days correctly', () => {
    const date = new Date('2025-01-15')
    const result = addDays(date, 3)
    expect(result.getDate()).toBe(18)
  })

  it('should identify weekend correctly', () => {
    const saturday = new Date('2025-01-18') // Saturday
    const monday = new Date('2025-01-20')   // Monday
    expect(isWeekend(saturday)).toBe(true)
    expect(isWeekend(monday)).toBe(false)
  })
})
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
import dayjs, { type Dayjs } from 'dayjs'

// ✅ Good - Using dayjs directly
const now = dayjs()
const parsedDate = dayjs('2025-01-15')
const formatted = now.format('YYYY-MM-DD')
const isWeekend = parsedDate.day() === 0 || parsedDate.day() === 6

// ❌ Bad - Using native Date
const now = new Date()
const parsed = new Date('2025-01-15')
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
import { style } from '@vanilla-extract/css'

export const buttonBase = style({
  padding: '12px 24px',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: '600',
  transition: 'all 0.2s ease-in-out',
})

export const buttonPrimary = style([buttonBase, {
  backgroundColor: '#0070f3',
  color: 'white',
}])

export const buttonSecondary = style([buttonBase, {
  backgroundColor: '#f4f4f4',
  color: '#333',
  border: '1px solid #ddd',
}])
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
import { Button } from '@components/button'
import { colors } from '@theme/colors'
import { formatDate } from '@utils/date'
import dayjs from 'dayjs'

// ✅ Side effect import for dayjs configuration
import '@adapters/date'

// ✅ Relative paths OK for child directories
import { HeroSection } from './_components/hero-section'

// ❌ Forbidden: Relative paths to parent directories
import { Button } from '../../../components/button'
```

## 📦 Package Management

```bash
# Installation
pnpm install

# Development server
pnpm dev

# Testing
pnpm test

# Build
pnpm build
```

## ⚡ Performance & Quality Checks

**CRITICAL: Always run these commands after implementation**

### Required Quality Commands
```bash
# Code linting
pnpm lint

# Type checking
pnpm typecheck

# Run all tests
pnpm test

# Production build verification
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
6. Run full quality checks before commit

**Example TDD workflow:**
```bash
# Step 1: Create test and watch it fail
pnpm exec vitest src/utils/date/date.test.ts --watch

# Step 2: Implement feature iteratively
# - Write minimal code
# - See test pass
# - Refactor
# - Repeat

# Step 3: Final quality check
pnpm lint && pnpm typecheck && pnpm test && pnpm build
```

This ensures high code quality and prevents regressions.

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