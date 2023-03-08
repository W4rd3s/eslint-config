/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  rules: {
    /*
     * Enforce return statements in callbacks of array methods
     * https://eslint.org/docs/latest/rules/array-callback-return
     * TAG: Array
     */
    'array-callback-return': [
      'error',
      { allowImplicit: true, checkForEach: true },
    ],

    /*
     * Require super() calls in constructors
     * https://eslint.org/docs/latest/rules/constructor-super
     * TAG: Class
     */
    'constructor-super': 'error',

    /*
     * Enforce "for" loop update clause moving the counter in the right direction
     * https://eslint.org/docs/latest/rules/for-direction
     * TAG: Loop
     */
    'for-direction': 'error',

    /*
     * Enforce return statements in getters
     * https://eslint.org/docs/latest/rules/getter-return
     * TAG: Class
     */
    'getter-return': ['error', { allowImplicit: true }],

    /*
     * Disallow using an async function as a Promise executor
     * https://eslint.org/docs/latest/rules/no-async-promise-executor
     * TAG: Async
     */
    'no-async-promise-executor': 'error',

    /*
     * Disallow await inside of loops
     * https://eslint.org/docs/latest/rules/no-await-in-loop
     * TAG: Loop
     */
    'no-await-in-loop': 'error',
  },
};
