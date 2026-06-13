// eslint.config.js

import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  {
    ignores: ['node_modules', '.wxt', '.output', 'dist', 'build', 'coverage', 'public', 'assets'],
  },

  js.configs.recommended,

  {
    files: ['**/*.{ts,tsx}'],

    extends: [
      ...tseslint.configs.recommendedTypeChecked
    ],

    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },

      globals: {
        ...globals.browser,
        ...globals.node,

        browser: 'readonly',
        defineBackground: 'readonly',
        defineContentScript: 'readonly',
      },
    },

    plugins: {
      import: importPlugin,
      'react-hooks': reactHooks,
    },

    rules: {
      // TypeScript
      'no-undef': 'off',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/no-explicit-any': 'warn',

      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],

      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/await-thenable': 'error',

      '@typescript-eslint/prefer-nullish-coalescing': 'warn',
      '@typescript-eslint/prefer-optional-chain': 'warn',

      '@typescript-eslint/switch-exhaustiveness-check': 'error',

      // Imports
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      // Hooks (works with Preact hooks too)
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // General quality
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
    },
  },
  eslintConfigPrettier
);
