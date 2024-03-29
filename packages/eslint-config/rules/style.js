/**
 * @type {import("eslint").Linter.Config}
 */

module.exports = {
  rules: {
    /*
     * Enforce consistent brace style for all control statements
     * https://eslint.org/docs/latest/rules/curly
     * Disabled, covered by prettier
     */
    curly: 'off',

    /*
     * Enforce linebreaks after opening and before closing array brackets
     * https://eslint.org/docs/latest/rules/array-bracket-newline
     * Disabled, covered by prettier
     */
    'array-bracket-newline': 'off',

    /*
     * Enforce consistent spacing inside array brackets
     * https://eslint.org/docs/latest/rules/array-bracket-spacing
     * Disabled, covered by prettier
     */
    'array-bracket-spacing': 'off',

    /*
     * Enforce line breaks after each array element
     * https://eslint.org/docs/latest/rules/array-element-newline
     * Disabled, covered by prettier
     */
    'array-element-newline': 'off',

    /*
     * Require parentheses around arrow function arguments
     * https://eslint.org/docs/latest/rules/arrow-parens
     * Disabled, covered by prettier
     */
    'arrow-parens': 'off',

    /*
     * Enforce consistent spacing before and after the arrow in arrow functions
     * https://eslint.org/docs/latest/rules/arrow-spacing
     * Disabled, covered by prettier
     */
    'arrow-spacing': 'off',

    /*
     * Disallow or enforce spaces inside of blocks after opening block and before closing block
     * https://eslint.org/docs/latest/rules/block-spacing
     * Disabled, covered by prettier
     */
    'block-spacing': 'off',

    /*
     * Enforce consistent brace style for blocks
     * https://eslint.org/docs/latest/rules/brace-style
     * Disabled, covered by prettier
     */
    'brace-style': 'off',

    /*
     * Require or disallow trailing commas
     * https://eslint.org/docs/latest/rules/comma-dangle
     */
    'comma-dangle': "off",

    /*
     * Enforce consistent spacing before and after commas
     * https://eslint.org/docs/latest/rules/comma-spacing
     * Disabled, covered by prettier
     */
    'comma-spacing': 'off',

    /*
     * Enforce consistent comma style
     * https://eslint.org/docs/latest/rules/comma-style
     * Disabled, covered by prettier
     */
    'comma-style': 'off',

    /*
     * Enforce consistent spacing inside computed property brackets
     * https://eslint.org/docs/latest/rules/computed-property-spacing
     * Disabled, covered by prettier
     */
    'computed-property-spacing': 'off',

    /*
     * Enforce consistent newlines before and after dots
     * https://eslint.org/docs/latest/rules/dot-location
     * Disabled, covered by prettier
     */
    'dot-location': 'off',

    /*
     * Require or disallow newline at the end of files
     * https://eslint.org/docs/latest/rules/eol-last
     * Disabled, covered by prettier
     */
    'eol-last': 'off',

    /*
     * Require or disallow spacing between function identifiers and their invocations
     * https://eslint.org/docs/latest/rules/func-call-spacing
     * Disabled, covered by prettier
     */
    'func-call-spacing': 'off',

    /*
     * Enforce line breaks between arguments of a function call
     * https://eslint.org/docs/latest/rules/function-call-argument-newline
     * Disabled, covered by prettier
     */
    'function-call-argument-newline': 'off',

    /*
     * Enforce consistent line breaks inside function parentheses
     * https://eslint.org/docs/latest/rules/function-paren-newline
     * Disabled, covered by prettier
     */
    'function-paren-newline': 'off',

    /*
     * Enforce consistent spacing around * operators in generator functions
     * https://eslint.org/docs/latest/rules/generator-star-spacing
     * Disabled, covered by prettier
     */
    'generator-star-spacing': 'off',

    /*
     * Enforce the location of arrow function bodies
     * https://eslint.org/docs/latest/rules/implicit-arrow-linebreak
     * Disabled, covered by prettier
     */
    'implicit-arrow-linebreak': 'off',

    /*
     * Enforce consistent indentation
     * https://eslint.org/docs/latest/rules/indent
     * Disabled, covered by prettier
     */
    indent: 'off',

    /*
     * Enforce the consistent use of either double or single quotes in JSX attributes
     * https://eslint.org/docs/latest/rules/jsx-quotes
     * Disabled, covered by prettier
     */
    'jsx-quotes': 'off',

    /*
     * Enforce consistent spacing between keys and values in object literal properties
     * https://eslint.org/docs/latest/rules/key-spacing
     * Disabled, covered by prettier
     */
    'key-spacing': 'off',

    /*
     * Enforce consistent spacing before and after keywords
     * https://eslint.org/docs/latest/rules/keyword-spacing
     * Disabled, covered by prettier
     */
    'keyword-spacing': 'off',

    /*
     * Enforce position of line comments
     * https://eslint.org/docs/latest/rules/line-comment-position
     */
    'line-comment-position': ['off', { position: 'above' }],

    /*
     * Enforce consistent linebreak style
     * https://eslint.org/docs/latest/rules/linebreak-style
     * Disabled, covered by prettier
     */
    'linebreak-style': 'off',

    /*
     * Require empty lines around comments
     * https://eslint.org/docs/latest/rules/lines-around-comment
     * Disabled, covered by prettier
     */
    'lines-around-comment': 'off',

    /*
     * Require or disallow an empty line between class members
     * https://eslint.org/docs/latest/rules/lines-between-class-members
     */
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: false },
    ],

    /*
     * Enforce a maximum line length
     * https://eslint.org/docs/latest/rules/max-len
     * Disabled, covered by prettier
     */
    'max-len': 'off',

    /*
     * Enforce a maximum number of statements allowed per line
     * https://eslint.org/docs/latest/rules/max-statements-per-line
     */
    'max-statements-per-line': "off",

    /*
     * Enforce newlines between operands of ternary expressions
     * https://eslint.org/docs/latest/rules/multiline-ternary
     * Disabled, covered by prettier
     */
    'multiline-ternary': 'off',

    /*
     * Enforce or disallow parentheses when invoking a constructor with no arguments
     * https://eslint.org/docs/latest/rules/new-parens
     * Disabled, covered by prettier
     */
    'new-parens': 'off',

    /*
     * Require a newline after each call in a method chain
     * https://eslint.org/docs/latest/rules/newline-per-chained-call
     * ignoreChainWithDepth: 4 is excessive ?
     * Disabled, covered by prettier
     */
    'newline-per-chained-call': 'off',

    /*
     * Disallow unnecessary parentheses
     * https://eslint.org/docs/latest/rules/no-extra-parens
     * Disabled, covered by prettier
     */
    'no-extra-parens': 'off' ,

    /*
     * Disallow unnecessary semicolons
     * https://eslint.org/docs/rules/no-extra-semi
     * 'no-extra-semi': 'error',
     */
    'no-extra-semi': 'off',

    /*
     * Disallow leading or trailing decimal points in numeric literals
     * https://eslint.org/docs/rules/no-floating-decimal
     */
    'no-floating-decimal': 'off',

    /*
     * Disallow mixed spaces and tabs for indentation
     * https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs
     * Disabled, covered by prettier
     */
    'no-mixed-spaces-and-tabs': 'off',

    /*
     * Disallow multiple spaces
     * https://eslint.org/docs/latest/rules/no-multi-spaces
     * Disabled, covered by prettier
     */
    'no-multi-spaces': 'off',

    /*
     * Disallow multiple empty lines
     * https://eslint.org/docs/latest/rules/no-multiple-empty-lines
     * Disabled, covered by prettier
     */
    'no-multiple-empty-lines': 'off',

    /*
     * Disallow all tabs
     * https://eslint.org/docs/latest/rules/no-tabs
     */
    'no-tabs': 'error',

    /*
     * Disallow trailing whitespace at the end of lines
     * https://eslint.org/docs/latest/rules/no-trailing-spaces
     * Disabled, covered by prettier
     */
    'no-trailing-spaces': 'off',

    /*
     * Disallow whitespace before properties
     * https://eslint.org/docs/latest/rules/no-whitespace-before-property
     * Disabled, covered by prettier
     */
    'no-whitespace-before-property': 'off',

    /*
     * Enforce the location of single-line statements
     * https://eslint.org/docs/latest/rules/nonblock-statement-body-position
     * Disabled, covered by prettier
     */
    'nonblock-statement-body-position': 'off',

    /*
     * Enforce consistent line breaks after opening and before closing braces
     * https://eslint.org/docs/latest/rules/object-curly-newline
     * Disabled, covered by prettier
     */
    'object-curly-newline': 'off',

    /*
     * Enforce consistent spacing inside braces
     * https://eslint.org/docs/latest/rules/object-curly-spacing
     * Disabled, covered by prettier
     */
    'object-curly-spacing': 'off',

    /*
     * Enforce placing object properties on separate lines
     * https://eslint.org/docs/latest/rules/object-property-newline
     * Disabled, covered by prettier
     */
    'object-property-newline': 'off',

    /*
     * Enforce consistent linebreak style for operators
     * https://eslint.org/docs/latest/rules/operator-linebreak
     * Disabled, covered by prettier
     */
    'operator-linebreak': 'off',

    /*
     * Require or disallow padding within blocks
     * https://eslint.org/docs/latest/rules/padded-blocks
     * Disabled, covered by prettier
     */
    'padded-blocks': 'off',

    /*
     * Require or disallow padding lines between statements
     * https://eslint.org/docs/latest/rules/padding-line-between-statements
     */
    'padding-line-between-statements': 'off',

    /*
     * Enforce the consistent use of either backticks, double, or single quotes
     * https://eslint.org/docs/latest/rules/quotes
     * Disabled, covered by prettier
     */
    quotes: 'off',

    /*
     * Enforce spacing between rest and spread operators and their expressions
     * https://eslint.org/docs/latest/rules/rest-spread-spacing
     * Disabled, covered by prettier
     */
    'rest-spread-spacing': 'off',

    /*
     * Require or disallow semicolons instead of ASI
     * https://eslint.org/docs/latest/rules/semi
     * Disabled, covered by prettier
     */
    semi: 'off',

    /*
     * Enforce consistent spacing before and after semicolons
     * https://eslint.org/docs/latest/rules/semi-spacing
     * Disabled, covered by prettier
     */
    'semi-spacing': 'off',

    /*
     * Enforce location of semicolons
     * https://eslint.org/docs/latest/rules/semi-style
     * Disabled, covered by prettier
     */
    'semi-style': 'off',

    /*
     * Enforce consistent spacing before blocks
     * https://eslint.org/docs/latest/rules/space-before-blocks
     * Disabled, covered by prettier
     */
    'space-before-blocks': 'off',

    /*
     * Enforce consistent spacing before function definition opening parenthesis
     * https://eslint.org/docs/latest/rules/space-before-function-paren
     * Disabled, covered by prettier
     */
    'space-before-function-paren': 'off',

    /*
     * Enforce consistent spacing inside parentheses
     * https://eslint.org/docs/latest/rules/space-in-parens
     * Disabled, covered by prettier
     */
    'space-in-parens': 'off',

    /*
     * Require spacing around infix operators
     * https://eslint.org/docs/latest/rules/space-infix-ops
     * Disabled, covered by prettier
     */
    'space-infix-ops': 'off',

    /*
     * Enforce consistent spacing before or after unary operators
     * https://eslint.org/docs/latest/rules/space-unary-ops
     * Disabled, covered by prettier
     */
    'space-unary-ops': 'off',

    /*
     * Enforce spacing around colons of switch statements
     * https://eslint.org/docs/rules/switch-colon-spacing
     * Disabled, covered by prettier
     */
    'switch-colon-spacing': 'off',

    /*
     * Require or disallow spacing around embedded expressions of template strings
     * https://eslint.org/docs/rules/template-curly-spacing
     * Disabled, covered by prettier
     */
    'template-curly-spacing': 'off',

    /*
     * Require or disallow spacing between template tags and their literals
     * https://eslint.org/docs/rules/template-tag-spacing
     * Disabled, covered by prettier
     */
    'template-tag-spacing': 'off',

    /*
     * Require or disallow Unicode byte order mark (BOM)
     * https://eslint.org/docs/rules/unicode-bom
     * Disabled, covered by prettier
     */
    'unicode-bom': 'off',

    /*
     * Require parentheses around immediate function invocations
     * https://eslint.org/docs/rules/wrap-iife
     * Disabled, covered by prettier
     */
    'wrap-iife': 'off',

    /*
     * Require parenthesis around regex literals
     * https://eslint.org/docs/rules/wrap-regex
     * Disabled, covered by prettier
     */
    'wrap-regex': 'off',

    /*
     * Require or disallow spacing around the * in yield* expressions
     * https://eslint.org/docs/rules/yield-star-spacing
     * Disabled, covered by prettier
     */
    'yield-star-spacing': 'off',
  },
};
