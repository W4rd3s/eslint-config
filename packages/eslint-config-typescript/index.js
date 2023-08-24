/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  extends: ['@wardes/eslint-config'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        './rules/compatibility.js',
        './rules/typescript.js',
        './rules/style.js',
        './rules/import.js',
      ].map(require.resolve),
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint'],
      rules: {
        'no-constant-condition': 'off',
      },
    },
  ],
};
