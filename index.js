/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ['./rules/array'].map(require.resolve),
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
};
