/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  extends: ['@wardes/eslint-config'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        './rules/compatibility.js',
        './rules/typescript.js',
        './rules/style.js',
      ].map(require.resolve),
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint'],
      rules: {
        // eslint
        "no-constant-condition": 'off',

        // eslint-plugin-import
        "import/named": "off",
        'import/default': 'off',
        'import/namespace': 'off',
        'import/no-unresolved': "off",
        'import/order': ['error', {groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type']}],
      },
    },
  ],
};
