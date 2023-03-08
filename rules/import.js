/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  rules: {
    // Disallow duplicate module imports
    // https://eslint.org/docs/latest/rules/no-duplicate-imports
    'no-duplicate-imports': 'error',

    // Disallow assigning to imported bindings
    // https://eslint.org/docs/latest/rules/no-import-assign
    'no-import-assign': 'error',
  },
};
