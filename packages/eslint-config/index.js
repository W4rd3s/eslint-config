/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
  },
  extends: [
    './rules/javascript.js',
    './rules/style.js',
    './rules/import.js',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
  root: true,
  rules: {},
};
