/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  extends: ['@wardes/eslint-config-typescript'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: [
        './rules/react.js',
        './rules/hooks.js',
        './rules/jsx-a11y.js',
        './rules/next.js',
      ].map(require.resolve),
      rules: {},
    },
  ],
};
