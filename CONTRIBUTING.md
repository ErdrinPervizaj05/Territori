# Contributing to Territori

Thank you for your interest in contributing to Territori! This document provides guidelines and instructions for contributing to the project.

## ⚠️ Important

**This is a UI-only project.** No backend, API, or database changes should be made. Focus on UI/UX improvements and component development.

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- Git

### Setup Development Environment

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Territori.git
   cd Territori
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/ErdrinPervizaj05/Territori.git
   ```
4. **Install dependencies**:
   ```bash
   npm install
   ```
5. **Start development server**:
   ```bash
   npm run dev
   ```

## 🌿 Branch Naming Convention

Create branches with descriptive names following this pattern:

```
feature/description       # New features or improvements
fix/description          # Bug fixes
refactor/description     # Code refactoring
docs/description         # Documentation updates
style/description        # CSS/Tailwind class improvements
```

### Examples
- `feature/add-listing-search`
- `fix/navbar-responsive-layout`
- `refactor/extract-card-component`
- `docs/update-readme`

### Creating a Branch

```bash
# Update main with latest changes
git checkout main
git pull upstream main

# Create and switch to new branch
git checkout -b feature/your-feature-name
```

## 📝 Commit Message Convention

Write clear, descriptive commit messages:

```
<type>: <subject>

<body (optional)>

<footer (optional)>
```

### Types
- `feat`: A new feature
- `fix`: A bug fix
- `refactor`: Code refactoring without changing functionality
- `style`: Changes to CSS/Tailwind classes only
- `docs`: Documentation updates
- `test`: Adding or updating tests
- `chore`: Build configuration, dependencies, etc.

### Examples
```
feat: add search functionality to listings page

This adds a search bar to the listings page that filters
results by property name and location.

Closes #42
```

```
fix: correct navbar centering on mobile devices

The navbar links were not properly centered on small screens.
Changed flex layout to properly center content.
```

## 💻 Code Style Rules

### TypeScript & React
- Use `const` for variables, avoid `let` and `var`
- Use arrow functions for React components
- Keep components simple and focused
- Export components at the end of the file
- Remove unused React imports (use `jsx` transform)

### TailwindCSS
- **Use utility classes only** - no custom CSS in components
- Avoid inline `style` prop when Tailwind can do it
- Group related utilities logically for readability
- Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`)

### Example Component Structure
```tsx
const MyComponent = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold text-gray-900">Title</h1>
      <p className="text-gray-600">Description</p>
    </div>
  );
};

export default MyComponent;
```

### What to AVOID
- ❌ Inline styles: `style={{ color: 'red' }}`
- ❌ Custom CSS files in components
- ❌ Unused imports
- ❌ Hardcoded values (use constants)
- ❌ Complex nested components (extract to separate files)

## 🧪 Testing & Quality

Before submitting a PR:

1. **Run linter**:
   ```bash
   npm run lint
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Test locally**:
   ```bash
   npm run dev
   ```
   - Test all affected routes
   - Check responsive design (mobile, tablet, desktop)
   - Verify no console errors

## 📤 Submitting a Pull Request

1. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: your feature description"
   ```

2. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Open a Pull Request** on GitHub
   - Use the [PR template](.github/pull_request_template.md)
   - Link related issues: `Closes #42`
   - Include screenshots if UI changes
   - Provide clear description of changes

4. **Address review comments**
   - Make requested changes
   - Push new commits to the same branch
   - No need to close and reopen the PR

## ✅ Pull Request Checklist

Before submitting, ensure:

- [ ] Branch created from latest `main`
- [ ] All npm scripts pass:
  - `npm run lint` ✅
  - `npm run build` ✅
  - `npm run dev` - tested locally ✅
- [ ] Changes tested on multiple screen sizes
- [ ] No console errors or warnings
- [ ] All affected routes work correctly
- [ ] TypeScript has no errors
- [ ] Used Tailwind classes (no inline styles or custom CSS)
- [ ] PR description is clear and meaningful
- [ ] Screenshots included for UI changes

## 🐛 Reporting Bugs

Use the [bug report template](.github/ISSUE_TEMPLATE/bug_report.md):

1. Go to [Issues](https://github.com/ErdrinPervizaj05/Territori/issues)
2. Click "New Issue"
3. Select "Bug Report"
4. Fill in all required fields:
   - Route/page affected
   - Steps to reproduce
   - Expected vs. actual behavior
   - Screenshots if applicable
   - Browser/device info

## 💡 Suggesting Features

Use the [feature request template](.github/ISSUE_TEMPLATE/feature_request.md):

1. Go to [Issues](https://github.com/ErdrinPervizaj05/Territori/issues)
2. Click "New Issue"
3. Select "Feature Request"
4. Describe the feature and benefits

## 📚 Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com)
- [Vite Documentation](https://vitejs.dev)

## ❓ Questions?

- Check existing [Issues](https://github.com/ErdrinPervizaj05/Territori/issues)
- Open a new issue with your question
- Review [README.md](README.md) for project overview

## 📋 Code of Conduct

Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before contributing.

---

Thank you for contributing to Territori! 🙏
