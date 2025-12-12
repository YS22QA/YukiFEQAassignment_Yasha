import playwright from 'eslint-plugin-playwright';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  {
    ignores: ['**/playwright-report/**', '**/test-results/**', '**/dist/**'],
  },
  ...tseslint.configs.recommended,
  {
    ...playwright.configs['flat/recommended'],
    files: ['tests/**'],
  },
  eslintPluginPrettierRecommended,
  {
    rules: {
      'playwright/expect-expect': 'off',
    },
  },
);
