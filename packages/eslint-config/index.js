/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    './rules/javascript.js',
    './rules/style.js',
    './rules/import.js',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
};
