/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  rules: {
    // Disallow unmodified loop conditions
    // https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'error',

    // Disallow loops with a body that allows only one iteration
    // https://eslint.org/docs/latest/rules/no-unreachable-loop
    'no-unreachable-loop': 'error',

    // Require for-in loops to include an if statement
    // https://eslint.org/docs/latest/rules/guard-for-in
    'guard-for-in': 'error',
  },
};
