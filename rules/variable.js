/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  rules: {
    // Disallow reassigning const variables
    // https://eslint.org/docs/latest/rules/no-const-assign
    'no-const-assign': 'error',

    // Disallow empty destructuring patterns
    // https://eslint.org/docs/latest/rules/no-empty-pattern
    'no-empty-pattern': 'error',

    // Disallow literal numbers that lose precision
    // https://eslint.org/docs/latest/rules/no-loss-of-precision
    'no-loss-of-precision': 'error',

    // Disallow assignments where both sides are exactly the same
    // https://eslint.org/docs/latest/rules/no-self-assign
    'no-self-assign': 'error',

    // Disallow the use of undeclared variables unless mentioned in /*global */ comments
    // https://eslint.org/docs/latest/rules/no-undef
    'no-undef': 'error',

    // Disallow unused variables
    // https://eslint.org/docs/latest/rules/no-unused-vars
    'no-unused-vars': 'error',

    // Enforce the use of variables within the scope they are defined
    // https://eslint.org/docs/latest/rules/block-scoped-var
    'block-scoped-var': 'error',

    // Require or disallow initialization in variable declarations
    // https://eslint.org/docs/latest/rules/init-declarations
    'init-declarations': 'off',
  },
};
