module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:vue/recommended',
    '@vue/typescript/recommended',
    'plugin:prettier-vue/recommended',
    'plugin:markdown/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  parserOptions: {
    tsconfigRootDir: '.',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'no-console': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'vue/max-attributes-per-line': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['./tsconfig.json', './tsconfig.storybook.json'],
      },
    },
  },
  overrides: [
    {
      files: ['vite.config.ts'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
            optionalDependencies: false,
            peerDependencies: false,
          },
        ],
      },
    },
    {
      files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs|mdx)'],
      parserOptions: {
        ecmaVersion: 2022,
        project: './tsconfig.storybook.json',
      },
      extends: ['plugin:storybook/recommended'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
            optionalDependencies: false,
            peerDependencies: true,
          },
        ],
      },
    },
    {
      files: ['.storybook/preview.ts'],
      parserOptions: {
        ecmaVersion: 2022,
        project: './tsconfig.storybook.json',
      },
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
  ],
};
