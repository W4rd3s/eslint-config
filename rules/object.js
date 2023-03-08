/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  rules: {
    // Disallow calling global object properties as functions
    // https://eslint.org/docs/latest/rules/no-obj-calls
    'no-obj-calls': 'error',

    // Disallow duplicate keys in object literals
    // https://eslint.org/docs/latest/rules/no-dupe-keys
    'no-dupe-keys': 'error',

    // Disallow calling some Object.prototype methods directly on objects
    // https://eslint.org/docs/latest/rules/no-prototype-builtins
    'no-prototype-builtins': 'error',

    // Disallow control flow statements in finally blocks
    // https://eslint.org/docs/latest/rules/no-unsafe-finally
    'no-unsafe-finally': 'error',

    // Enforce dot notation whenever possible
    // https://eslint.org/docs/latest/rules/dot-notation
    'dot-notation': ['error', { allowKeywords: true, allowPattern: '' }],
  },
};
