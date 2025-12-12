# yukiFE_Yasha - Playwright Automation Framework

This project is a modern specific Front-End test automation framework built with **Playwright** and **TypeScript**. It follows industry best practices including the Page Object Model (POM), custom fixtures for dependency injection, and strict type safety.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```
   *(Note: On some Linux systems, you might need `npx playwright install-deps`)*

## 🛠️ Usage

### Running Tests
Run all tests (headless):
```bash
npm test
```
*or*
```bash
npx playwright test
```

Run specifically on Chromium (headed):
```bash
npx playwright test --project=chromium --headed
```

### Linting
Check code quality and formating:
```bash
npm run lint
```

### Playwright MCP Server
Start the Model Context Protocol server (for AI Agent integration):
```bash
npm run mcp
```

## 🏗️ Architecture Overview

For a deep dive into *why* we used these patterns (Fixtures, Strict Typing, MCP), please see [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

### 1. Page Object Model (POM)
Located in `pages/`.
- **`BasePage.ts`**: The abstract base class that all pages extend. It contains common methods accessible across the application (e.g., `navigateToMenu`).
- **`InvoicesPage.ts` / `ExamplePage.ts`**: Specific page classes that encapsulate selectors and logic for those pages. Tests interact with these methods rather than raw DOM selectors.

### 2. Custom Fixtures
Located in `fixtures/base.ts`.
- We extend the base Playwright `test` object to automatically instantiate and inject Page Objects.
- **Benefit**: Tests remain clean. You don't need `const page = new InvoicesPage(page)` in every test. You simply request `{ invoicesPage }` in the test arguments.

### 3. Strict TypeScript & Quality Tools
- **`tsconfig.json`**: Enforces strict typing (`"strict": true`) to catch errors at compile time.
- **ESLint & Prettier**: Configured to ensure consistent code style and best practices (`eslint.config.mjs`, `.prettierrc`).

### 4. Continuous Integration
- **GitHub Actions**: Configured in `.github/workflows/playwright.yml` to run tests automatically on push/PR to main branches.

## 📂 Directory Structure

```
yukiFE_Yasha/
├── pages/              # Page Object definitions
├── tests/              # Test specifications (*.spec.ts)
├── fixtures/           # Custom test fixtures (Dependency Injection)
├── .github/workflows/  # CI/CD pipelines
├── playwright.config.ts# Main Playwright configuration
├── eslint.config.mjs   # Linting configuration
└── package.json        # Dependencies and scripts
```
