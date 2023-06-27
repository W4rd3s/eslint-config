module.exports = {
  rules: {
    // Disallow or enforce spaces inside of blocks after opening block and before closing block
    // https://typescript-eslint.io/rules/block-spacing/
    // Disabled, covered by prettier (Bracket Spacing)
    '@typescript-eslint/block-spacing': 'off',

    // Enforce consistent brace style for blocks
    // https://typescript-eslint.io/rules/brace-style/
    // Disabled, covered by prettier
    '@typescript-eslint/brace-style': 'off',

    // Require or disallow trailing commas
    // https://typescript-eslint.io/rules/comma-dangle/
    // Disabled, covered by prettier (Trailing Commas)
    '@typescript-eslint/comma-dangle': 'off',

    // Enforce consistent spacing before and after commas
    // https://typescript-eslint.io/rules/comma-spacing/
    // Disabled, covered by prettier
    '@typescript-eslint/comma-spacing': 'off',

    // Require or disallow spacing between function identifiers and their invocations
    // https://typescript-eslint.io/rules/func-call-spacing/
    // Disabled, covered by prettier
    '@typescript-eslint/func-call-spacing': 'off',

    // Enforce consistent indentation
    // https://typescript-eslint.io/rules/indent/
    // Disabled, covered by prettier (tabWidth)
    '@typescript-eslint/indent': 'off',

    // Enforce consistent spacing between property names and type annotations in types and interfaces
    // https://typescript-eslint.io/rules/key-spacing/
    // Disabled, covered by prettier
    '@typescript-eslint/key-spacing': 'off',

    // Enforce consistent spacing before and after keywords
    // https://typescript-eslint.io/rules/keyword-spacing/
    // Disabled, covered by prettier
    '@typescript-eslint/keyword-spacing': 'off',

    // Require a specific member delimiter style for interfaces and type literals
    // https://typescript-eslint.io/rules/member-delimiter-style/
    // Disabled, covered by prettier
    '@typescript-eslint/member-delimiter-style': 'off',

    // Require empty lines around comments
    // https://typescript-eslint.io/rules/lines-around-comment/
    // Disabled, covered by prettier
    '@typescript-eslint/lines-around-comment': 'off',

    // Require or disallow an empty line between class members
    // https://typescript-eslint.io/rules/lines-between-class-members/
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: false, exceptAfterOverload: true },
    ],

    // Disallow unnecessary parentheses
    // https://typescript-eslint.io/rules/no-extra-parens/
    // Disabled, covered by prettier
    '@typescript-eslint/no-extra-parens': 'off',

    // Disallow unnecessary semicolons
    // https://typescript-eslint.io/rules/no-extra-semi/
    // Disabled, covered by prettier
    '@typescript-eslint/no-extra-semi': 'off',

    // Enforce consistent spacing inside braces
    // https://typescript-eslint.io/rules/object-curly-spacing/
    // Disabled, covered by prettier
    '@typescript-eslint/object-curly-spacing': 'off',

    // Require or disallow padding lines between statements
    // https://typescript-eslint.io/rules/padding-line-between-statements/
    // Disabled, covered by prettier
    '@typescript-eslint/padding-line-between-statements': 'off',

    // Enforce the consistent use of either backticks, double, or single quotes
    // https://typescript-eslint.io/rules/quotes/
    // Disabled, covered by prettier (Quotes)
    '@typescript-eslint/quotes': 'off',

    // Require or disallow semicolons instead of ASI
    // https://typescript-eslint.io/rules/semi/
    // Disabled, covered by prettier
    '@typescript-eslint/semi': 'off',

    // Enforce consistent spacing before blocks
    // https://typescript-eslint.io/rules/space-before-blocks/
    // Disabled, covered by prettier
    '@typescript-eslint/space-before-blocks': 'off',

    // Enforce consistent spacing before function parenthesis
    // https://typescript-eslint.io/rules/space-before-function-paren/
    // Disabled, covered by prettier
    '@typescript-eslint/space-before-function-paren': 'off',

    // Require spacing around infix operators
    // https://typescript-eslint.io/rules/space-infix-ops/
    // Disabled, covered by prettier
    '@typescript-eslint/space-infix-ops': 'off',

    // Require consistent spacing around type annotations
    // https://typescript-eslint.io/rules/type-annotation-spacing/
    // Disabled, covered by prettier
    '@typescript-eslint/type-annotation-spacing': 'off',
  },
};
