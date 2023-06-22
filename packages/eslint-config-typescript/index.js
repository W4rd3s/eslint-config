/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
  ].map(require.resolve),
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {},
};
