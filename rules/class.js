/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  rules: {
    // Disallow reassigning class members
    // https://eslint.org/docs/latest/rules/no-class-assign
    'no-class-assign': 'error',

    // Disallow returning value from constructor
    // https://eslint.org/docs/latest/rules/no-constructor-return
    'no-constructor-return': 'error',

    // Disallow duplicate class members
    // https://eslint.org/docs/latest/rules/no-dupe-class-members
    'no-dupe-class-members': 'error',

    // Disallow returning values from setters
    // https://eslint.org/docs/latest/rules/no-setter-return
    'no-setter-return': 'error',

    // Disallow this/super before calling super() in constructors
    // https://eslint.org/docs/latest/rules/no-this-before-super
    'no-this-before-super': 'error',

    // Disallow unused private class members
    // https://eslint.org/docs/latest/rules/no-unused-private-class-members
    'no-unused-private-class-members': 'error',

    // Enforce getter and setter pairs in objects and classes
    // https://eslint.org/docs/latest/rules/accessor-pairs
    'accessor-pairs': 'warn',

    // Enforce that class methods utilize this
    // https://eslint.org/docs/latest/rules/class-methods-use-this
    'class-methods-use-this': 'error',

    // Require grouped accessor pairs in object literals and classes
    // https://eslint.org/docs/latest/rules/grouped-accessor-pairs
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],

    // This rule enforces that each file may contain only a particular number of classes and no more.
    // https://eslint.org/docs/rules/max-classes-per-file
    'max-classes-per-file': ['error', 1],

    // Require constructor names to begin with a capital letter
    // https://eslint.org/docs/latest/rules/new-cap
    'new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: [
          'Immutable.Map',
          'Immutable.Set',
          'Immutable.List',
        ],
      },
    ],
  },
};
