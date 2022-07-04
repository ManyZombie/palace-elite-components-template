module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'airbnb-base',
    '@vue/prettier',
    '@vue/typescript/recommended',
    'plugin:vue/recommended',
    'plugin:storybook/recommended',
    'plugin:markdown/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parserOptions: {
    ecmaVersion: 2022,
  },
  rules: {
    'no-console': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'vue/max-attributes-per-line': 'off',
  },
};
