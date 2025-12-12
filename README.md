# YukiFE Yasha - Automation Framework

A strict TypeScript-based Playwright automation framework featuring the **Page Object Model** and **Custom Fixtures**.

## Quick Start

# Install dependencies
npm install

npx playwright install

# Run tests
npx playwright test

# Run tests with UI 
npx playwright test --ui

# Run tests with UI in headed mode
npx playwright test --project=chromium --headed


## Project Structure
yukiFE_Yasha/
├── pages/       # Page Objects encapsulating UI logic
├── tests/       # Test specifications (*.spec.ts)
├── fixtures/    # Custom fixtures for Dependency Injection
├── utils/       # Shared constants and helpers
└── .github/     # CI/CD pipelines
