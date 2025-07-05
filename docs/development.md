# Development Guide

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

## 🔧 Development Environment Setup

### Prerequisites

- **Node.js**: Version 18 or higher
- **pnpm**: Latest version (recommended package manager)
- **Git**: For version control

### Initial Setup

```bash
# Clone the repository
git clone <repository-url>
cd RISTILL_ANIVERSARY_2025

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Environment Configuration

- Development server runs on `http://localhost:3000`
- Hot reload is enabled for all file changes
- TypeScript compilation happens in real-time
- CSS changes are reflected immediately

## 🚀 Development Workflow

### Daily Development Routine

1. **Start development server**:

   ```bash
   pnpm dev
   ```

2. **Make code changes** following the project conventions

3. **Run quality checks frequently**:

   ```bash
   # After significant changes
   pnpm lint && pnpm typecheck

   # When tests exist for modified files
   pnpm exec vitest run <test-file>
   ```

4. **Before commits, run full quality check**:
   ```bash
   pnpm lint && pnpm typecheck && pnpm test
   ```

### Feature Development Process

1. **Plan the feature** - Understand requirements and create a mental model
2. **Create component structure** - Follow the project's directory conventions
3. **Implement with TDD** (for utils) - Write tests first, then implementation
4. **Style with Vanilla Extract** - Follow naming conventions and restrictions
5. **Test thoroughly** - Ensure all quality checks pass
6. **Document if needed** - Update relevant documentation

### Code Quality Enforcement

The project enforces high code quality through multiple layers:

- **ESLint**: Catches common code issues and enforces consistent style
- **Prettier**: Automatically formats code for consistency
- **TypeScript**: Provides type safety and catches errors at compile time
- **Vitest**: Ensures code functionality through automated testing

## 🔍 Debugging and Troubleshooting

### Common Development Issues

#### TypeScript Errors

```bash
# Run type checking to see all issues
pnpm typecheck

# Common fixes:
# - Add missing type definitions
# - Use proper imports from @types packages
# - Follow satisfies pattern instead of type assertions
```

#### Linting Errors

```bash
# Check all linting issues
pnpm lint

# Auto-fix most issues
pnpm fmt

# Common fixes:
# - Use useCallback for event handlers
# - Follow immutable programming patterns
# - Use proper Vanilla Extract conventions
```

#### Test Failures

```bash
# Run all tests to see failures
pnpm test

# Run specific test file
pnpm exec vitest run <test-file>

# Run tests in watch mode for development
pnpm exec vitest <test-file> --watch
```

### Performance Optimization

#### Build Analysis

```bash
# Create production build
pnpm build

# Analyze bundle size (if configured)
pnpm analyze
```

#### Development Performance

- Use React DevTools for component analysis
- Monitor network requests in browser DevTools
- Check for unnecessary re-renders
- Optimize large lists with virtualization

### Deployment Preparation

#### Pre-deployment Checklist

1. **All quality checks pass**:

   ```bash
   pnpm lint && pnpm typecheck && pnpm test
   ```

2. **Production build succeeds**:

   ```bash
   pnpm build
   ```

3. **Preview deployment locally**:

   ```bash
   pnpm preview
   ```

4. **Test critical user flows** in preview environment

#### Deployment Process

```bash
# Deploy to Cloudflare (configured in wrangler.toml)
pnpm deploy
```

## 🔄 Git Workflow

### Recommended Git Practices

1. **Meaningful commit messages** - Describe what and why, not how
2. **Small, focused commits** - Each commit should represent a single logical change
3. **Quality checks before commits** - Always run linting and tests
4. **Clean commit history** - Use interactive rebase when appropriate

### Commit Message Format

```
type(scope): description

- feat: new feature
- fix: bug fix
- docs: documentation changes
- style: formatting changes
- refactor: code refactoring
- test: adding or updating tests
- chore: maintenance tasks

Examples:
feat(button): add loading state with spinner animation
fix(utils): handle edge case in date formatting
docs(readme): update installation instructions
```

## 📊 Project Monitoring

### Key Metrics to Track

- **Build time**: Should remain under 30 seconds for development builds
- **Bundle size**: Monitor for unexpected increases
- **Test coverage**: Maintain high coverage for critical paths
- **Type safety**: Zero TypeScript errors in production builds
- **Performance**: Core Web Vitals and loading times

### Tools and Resources

- **Next.js DevTools**: For React and Next.js specific debugging
- **Chrome DevTools**: For performance analysis and debugging
- **VS Code Extensions**: ESLint, Prettier, TypeScript support
- **pnpm**: Package management and script execution
