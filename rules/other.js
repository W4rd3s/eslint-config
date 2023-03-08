/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  rules: {
    // Disallow the use of debugger
    // https://eslint.org/docs/latest/rules/no-debugger
    'no-debugger': 'error',

    // Disallow reassigning exceptions in catch clauses
    // https://eslint.org/docs/latest/rules/no-ex-assign
    'no-ex-assign': 'error',

    // Disallow literal numbers that lose precision
    // https://eslint.org/docs/latest/rules/no-loss-of-precision
    'no-loss-of-precision': 'error',

    // Disallow new operators with global non-constructor functions
    // https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
    'no-new-native-nonconstructor': 'error',

    // Disallow new operators with the Symbol object
    // https://eslint.org/docs/latest/rules/no-new-symbol
    // Disable because duplicate with no-new-native-nonconstructor
    'no-new-symbol': 'off',

    // Disallow use of optional chaining in contexts where the undefined value is not allowed
    // https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
    'no-unsafe-optional-chaining': 'error',

    // Disallow the use of variables before they are defined
    // https://eslint.org/docs/latest/rules/no-use-before-define
    'no-use-before-define': 'error',

    // Enforce a maximum cyclomatic complexity allowed in a program
    // https://eslint.org/docs/latest/rules/complexity
    complexity: ['off', 20],
  },
};
