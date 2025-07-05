# Styling Guidelines

## 🎨 Vanilla Extract

### Allowed Packages

- `@vanilla-extract/css`
- `@vanilla-extract/css-utils`
- `@vanilla-extract/dynamic`

### Packages to Avoid

- `@vanilla-extract/recipes` (do not use)
- `@vanilla-extract/sprinkles` (do not use)

### Basic Usage

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

### Dynamic Styling

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

## 🌐 globalStyle Usage Restrictions

**CRITICAL: globalStyle usage is strictly limited and requires justification**

### Forbidden - General styling

```typescript
// ❌ DO NOT use globalStyle for regular component styling
import { globalStyle } from "@vanilla-extract/css";

globalStyle(".my-component", {
	padding: "1rem",
	backgroundColor: "white",
}); // This should be a regular style() export
```

### Allowed - Only for unavoidable global requirements (with mandatory comment)

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

### When globalStyle is allowed

- Overriding third-party library styles that cannot be targeted through component props
- Essential global resets that affect layout calculations
- Browser compatibility fixes that must be applied globally

### Guidelines

- Always include a detailed comment explaining why globalStyle is unavoidable
- Prefer component-specific styles with style() whenever possible
- Use specific selectors rather than broad global rules
- Avoid globalStyle for regular component styling

## 📱 Media Query Range Syntax

**CRITICAL: Always use modern media query range syntax**

### Good - Modern range syntax

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

### Bad - Legacy syntax

```typescript
// ❌ DO NOT use legacy min-width/max-width syntax
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

### Range syntax benefits

- More intuitive: `(width >= 768px)` is clearer than `(min-width: 768px)`
- Better range definitions: `(768px <= width < 1024px)` eliminates overlap
- Future-proof: Modern browsers support this syntax
- Less error-prone: Clear boundaries prevent media query conflicts

### Common patterns

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

## 🔒 TypeScript Type Safety

**CRITICAL: The `any` type is strictly forbidden**

### Forbidden

```typescript
// ❌ NEVER use any type
const transition = { duration: 1 } as any;
const props: any = { ... };
function handler(event: any) { ... }
```

### Alternatives

```typescript
// ✅ Use proper typing or type assertions with specific types
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

### Type safety best practices

- Always define proper interfaces and types
- Use type assertions only with specific types, never `any`
- Implement type guards for unknown data
- Use generic types for reusable components
- Prefer `unknown` over `any` for truly unknown data

## 🎯 TypeScript `satisfies` vs Type Assertions

**CRITICAL: Prefer `satisfies` over `as` type assertions**

### Good - Use satisfies for type safety (general cases)

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

### Motion Transition Proper Usage

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

### 重要事項

- 全てのtransition propsは`default`プロパティでラップする
- この方法でTypeScriptエラーを完全に回避可能
- 実行時の動作も正常で、アニメーション品質に影響なし

### Bad - Type assertions lose type safety

```typescript
// ❌ Type assertions (as) lose original type information
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

### Benefits of satisfies

- **Type preservation**: Original object type is maintained
- **Better IntelliSense**: IDE can provide accurate autocomplete
- **Error catching**: TypeScript catches property name typos
- **Type narrowing**: More precise type inference

### When to use each

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

### Motion.js specific usage

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

## 📋 ESLint Event Handler Rules

**CRITICAL: react/jsx-no-bind rule compliance**

### Forbidden - Arrow functions and bind in JSX

```typescript
// ❌ Don't use arrow functions directly in JSX
<button onClick={() => handleClick()}>Click</button>

// ❌ Don't use .bind() in JSX
<button onClick={handleClick.bind(this, id)}>Click</button>

// ❌ Don't use arrow functions with parameters in JSX
<button onClick={() => handleClickWithId(id)}>Click</button>
```

### Solution 1 - useCallback for parameterless functions

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

### Solution 2 - Extract component for functions with parameters

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

### Solution 3 - Data attributes for simple cases

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

### Guidelines

1. **Always use useCallback** for event handlers to prevent unnecessary re-renders
2. **Extract components** when you need to pass parameters to event handlers
3. **Use data attributes** for simple parameter passing scenarios
4. **Prefer component extraction** over complex data attribute patterns
5. **Include dependencies** in useCallback dependency array

### Component extraction pattern

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
