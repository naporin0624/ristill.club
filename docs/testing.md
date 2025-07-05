# Testing Strategy

## 🧪 TDD (Test-Driven Development)

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

# Run specific test file
pnpm exec vitest run <test-file>

# Watch specific test file
pnpm exec vitest <test-file> --watch
```

### Test Exceptions

- `page.tsx` and `layout.tsx` do not require tests
- Focus on business logic and service layers

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

### Example TDD workflow

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

## 📝 Test Structure and Patterns

### Test File Naming

- Use `<component-name>.test.tsx` for component tests
- Use `<feature>.test.ts` for utility function tests
- Place test files in the same directory as the code they test

### Test Organization

```typescript
// Example: src/utils/date/date.test.ts
import { describe, it, expect } from "vitest";
import { formatDate, addDays, isWeekend } from "./index";

describe("date utilities", () => {
	describe("formatDate", () => {
		it("should format date correctly", () => {
			const date = new Date("2025-01-15");
			expect(formatDate(date, "YYYY-MM-DD")).toBe("2025-01-15");
		});

		it("should handle different formats", () => {
			const date = new Date("2025-01-15");
			expect(formatDate(date, "DD/MM/YYYY")).toBe("15/01/2025");
		});
	});

	describe("addDays", () => {
		it("should add days correctly", () => {
			const date = new Date("2025-01-15");
			const result = addDays(date, 3);
			expect(result.getDate()).toBe(18);
		});

		it("should handle negative days", () => {
			const date = new Date("2025-01-15");
			const result = addDays(date, -3);
			expect(result.getDate()).toBe(12);
		});
	});

	describe("isWeekend", () => {
		it("should identify weekend correctly", () => {
			const saturday = new Date("2025-01-18"); // Saturday
			const monday = new Date("2025-01-20"); // Monday
			expect(isWeekend(saturday)).toBe(true);
			expect(isWeekend(monday)).toBe(false);
		});
	});
});
```

### Component Testing Patterns

```typescript
// Example: src/components/button/button.test.tsx
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./index";

describe("Button", () => {
	it("should render with correct text", () => {
		render(<Button>Click me</Button>);
		expect(screen.getByText("Click me")).toBeInTheDocument();
	});

	it("should apply primary variant by default", () => {
		render(<Button>Click me</Button>);
		const button = screen.getByRole("button");
		expect(button).toHaveClass("buttonPrimary");
	});

	it("should apply secondary variant when specified", () => {
		render(<Button variant="secondary">Click me</Button>);
		const button = screen.getByRole("button");
		expect(button).toHaveClass("buttonSecondary");
	});

	it("should call onClick when clicked", () => {
		const handleClick = vi.fn();
		render(<Button onClick={handleClick}>Click me</Button>);

		fireEvent.click(screen.getByRole("button"));
		expect(handleClick).toHaveBeenCalledOnce();
	});
});
```

### Testing Best Practices

1. **Write descriptive test names** that explain what the test is verifying
2. **Use describe blocks** to group related tests
3. **Test both happy paths and edge cases**
4. **Mock external dependencies** when testing in isolation
5. **Use meaningful assertions** that clearly express the expected behavior
6. **Keep tests focused** - one test should verify one specific behavior
7. **Follow AAA pattern**: Arrange, Act, Assert

### Test Coverage Guidelines

- **Utils**: 100% coverage required for all utility functions
- **Components**: Focus on behavior testing rather than implementation details
- **Integration**: Test critical user flows and interactions
- **Error handling**: Test error scenarios and edge cases
