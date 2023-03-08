/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  rules: {
    // Disallow irregular whitespace
    // https://eslint.org/docs/latest/rules/no-irregular-whitespace
    'no-irregular-whitespace': 'error',

    // Disallow template literal placeholder syntax in regular strings
    // https://eslint.org/docs/latest/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'error',

    // Disallow confusing multiline expressions
    // https://eslint.org/docs/latest/rules/no-unexpected-multiline
    'no-unexpected-multiline': 'error',

    // Enforce camelcase naming convention
    // https://eslint.org/docs/latest/rules/camelcase
    // TODO: turn false ignoreImports ?
    camelcase: 'error',

    // Enforce or disallow capitalization of the first letter of a comment
    // https://eslint.org/docs/latest/rules/capitalized-comments
    'capitalized-comments': ['error', 'always', {}],

    // Enforce a particular style for multiline comments
    // https://eslint.org/docs/latest/rules/multiline-comment-style
    'multiline-comment-style': ['error', 'starred-block'],

    // disallow specified identifiers
    // https://eslint.org/docs/rules/id-denylist
    'id-denylist': 'off',

    //Enforce minimum and maximum identifier lengths
    // https://eslint.org/docs/rules/id-length
    'id-length': 'off',

    // Require identifiers to match a specified regular expression
    // https://eslint.org/docs/rules/id-match
    'id-match': 'off',

    // Require or disallow logical assignment logical operator shorthand
    // https://eslint.org/docs/rules/logical-assignment-operators
    'logical-assignment-operators': [
      'error',
      'always',
      { enforceForLogicalOperands: true },
    ],

    // Enforce a maximum depth that blocks can be nested
    // https://eslint.org/docs/rules/max-depth
    'max-depth': 'off',

    // Enforce a maximum number of lines per file
    // https://eslint.org/docs/rules/max-lines
    'max-lines': 'off',

    // Enforce a maximum number of lines of code in a function
    // https://eslint.org/docs/rules/max-lines-per-function
    'max-lines-per-function': 'off',

    // Enforce a maximum depth that callbacks can be nested
    // https://eslint.org/docs/rules/max-nested-callbacks
    'max-nested-callbacks': 'off',

    // Enforce a maximum number of parameters in function definitions
    // https://eslint.org/docs/rules/max-params
    'max-params': 'off',

    // Enforce a maximum number of statements allowed in function blocks
    // https://eslint.org/docs/rules/max-statements
    'max-statements': 'off',
  },
};
