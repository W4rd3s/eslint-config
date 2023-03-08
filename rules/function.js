/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  rules: {
    // Disallow duplicate arguments in function definitions
    // https://eslint.org/docs/latest/rules/no-dupe-args
    'no-dupe-args': 'error',

    // Disallow reassigning function declarations
    // https://eslint.org/docs/latest/rules/no-func-assign
    'no-func-assign': 'error',

    // Disallow variable or function declarations in nested blocks
    // https://eslint.org/docs/latest/rules/no-inner-declarations
    'no-inner-declarations': 'error',

    // Disallow unreachable code after return, throw, continue, and break statements
    // https://eslint.org/docs/latest/rules/no-unreachable
    'no-unreachable': 'error',

    // Require braces around arrow function bodies
    // https://eslint.org/docs/latest/rules/arrow-body-style
    // TODO: turn always for react
    'arrow-body-style': [
      'error',
      'as-needed',
      { requireReturnForObjectLiteral: false },
    ],

    // Require return statements to either always or never specify values
    // https://eslint.org/docs/latest/rules/consistent-return
    'consistent-return': 'error',

    // Enforce consistent naming when capturing the current execution context
    // https://eslint.org/docs/latest/rules/consistent-this
    'consistent-this': 'off',

    // Enforce consistent brace style for all control statements
    // https://eslint.org/docs/latest/rules/curly
    curly: ['error', 'multi-line'],

    // Enforce default parameters to be last
    // https://eslint.org/docs/latest/rules/default-param-last
    'default-param-last': 'error',

    // Require function names to match the name of the variable or property to which they are assigned
    // https://eslint.org/docs/latest/rules/func-name-matching
    'func-name-matching': 'off',

    // Require or disallow named function expressions
    // https://eslint.org/docs/latest/rules/func-names
    'func-names': 'warn',

    // Enforce the consistent use of either function declarations or expressions
    // https://eslint.org/docs/latest/rules/func-style
    'func-style': ['error', 'expression'],
  },
};
