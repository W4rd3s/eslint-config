/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  rules: {
    // Disallow control characters in regular expressions
    // https://eslint.org/docs/latest/rules/no-control-regex
    'no-control-regex': 'error',

    // Disallow empty character classes in regular expressions
    // https://eslint.org/docs/latest/rules/no-empty-character-class
    'no-empty-character-class': 'error',

    // Disallow invalid regular expression strings in RegExp constructors
    // https://eslint.org/docs/latest/rules/no-invalid-regexp
    'no-invalid-regexp': 'error',

    // Disallow characters which are made with multiple code points in character class syntax
    // https://eslint.org/docs/latest/rules/no-misleading-character-class
    'no-misleading-character-class': 'error',

    // Disallow useless backreferences in regular expressions
    // https://eslint.org/docs/latest/rules/no-useless-backreference
    'no-useless-backreference': 'error',
  },
};
