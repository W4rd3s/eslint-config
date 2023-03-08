/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  rules: {
    // Disallow comparing against -0
    // https://eslint.org/docs/latest/rules/no-compare-neg-zero
    'no-compare-neg-zero': 'error',

    // Disallow assignment operators in conditional expressions
    // https://eslint.org/docs/latest/rules/no-cond-assign
    'no-cond-assign': ['error', 'except-parens'],

    // Disallow expressions where the operation doesn't affect the value
    // https://eslint.org/docs/latest/rules/no-constant-binary-expression
    'no-constant-binary-expression': 'error',

    // Disallow constant expressions in conditions
    // https://eslint.org/docs/latest/rules/no-constant-condition
    'no-constant-condition': ['error', { checkLoops: true }],

    // Disallow duplicate conditions in if-else-if chains
    // https://eslint.org/docs/latest/rules/no-dupe-else-if
    'no-dupe-else-if': 'error',

    // Disallow duplicate case labels
    // https://eslint.org/docs/latest/rules/no-duplicate-case
    'no-duplicate-case': 'error',

    // Disallow comparisons where both sides are exactly the same
    // https://eslint.org/docs/latest/rules/no-self-compare
    'no-self-compare': 'error',

    // Disallow negating the left operand of relational operators
    // https://eslint.org/docs/latest/rules/no-unsafe-negation
    'no-unsafe-negation': 'error',

    // Require calls to isNaN() when checking for NaN
    // https://eslint.org/docs/latest/rules/use-isnan
    'use-isnan': 'error',

    // Enforce comparing typeof expressions against valid strings
    // https://eslint.org/docs/latest/rules/valid-typeof
    'valid-typeof': 'error',

    // Require default cases in switch statements
    // https://eslint.org/docs/latest/rules/default-case
    'default-case': ['error', { commentPattern: '^no default$' }],

    // Enforce default clauses in switch statements to be last
    // https://eslint.org/docs/latest/rules/default-case-last
    'default-case-last': 'error',

    // Require the use of === and !==
    // https://eslint.org/docs/latest/rules/eqeqeq
    eqeqeq: ['error', 'always', { null: 'ignore' }],
  },
};
