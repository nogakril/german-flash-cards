import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tseslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
// import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

const ignores = ['**/node_modules/', '**/build/', '**/dist/'];

const plugins = {
  react,
  prettier,
  // 'jsx-a11y': jsxA11y, // TODO: enable this plugin once we start working on accessibility
  'react-hooks': reactHooks,
  'react-refresh': reactRefresh,
  '@typescript-eslint': tseslint,
  'simple-import-sort': simpleImportSort,
};

const rules = {
  ...js.configs.recommended.rules, // Base ESLint rules
  ...tseslint.configs.recommended.rules, // TypeScript rules
  ...react.configs.recommended.rules, // React rules
  // ...jsxA11y.configs.recommended.rules, // Accessibility rules

  // React Hooks rules
  'react-hooks/rules-of-hooks': 'error', // Ensures hooks are used correctly

  // Prettier integration
  'prettier/prettier': 'warn',

  // Import sorting
  'simple-import-sort/imports': [
    'error',
    {
      groups: [
        ['^react', '^react-dom', '^react-dom/*', '^react/*'], // React imports
        ['^@?((\\w+)(-|,|.)?)+'], // Third-party imports
        ['^\\.'], // Relative imports
        ['^.+\\.s?css$'], // Style imports
      ],
    },
  ],

  // Custom rules
  curly: ['error', 'all'],
  'no-nested-ternary': 'error',
  'react/react-in-jsx-scope': 'off',
  'no-case-declarations': 'off',
  'no-extra-boolean-cast': 'off',
  'no-prototype-builtins': 'off',
  '@typescript-eslint/no-explicit-any': 'off', // TODO: remove this rule once we’ve moved to Vite
  '@typescript-eslint/no-unused-vars': 'off',
  '@typescript-eslint/no-empty-object-type': 'off',
};

const config = defineConfig([
  globalIgnores(ignores),
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: { ...globals.es2023, ...globals.browser, ...globals.node },
    },
    plugins,
    rules,
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
  },
]);

export default config;
