module.exports = {
  env: {
    es6: true,
    node: true,
  },
  rules: {
    /*
     * Require that function overload signatures be consecutive
     * https://typescript-eslint.io/rules/adjacent-overload-signatures/
     */
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    /*
     * Require consistently using either T[] or Array<T> for arrays
     * https://typescript-eslint.io/rules/array-type/
     */
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],

    /*
     * Disallows awaiting a value that is not a Thenable
     * https://typescript-eslint.io/rules/await-thenable/
     */
    '@typescript-eslint/await-thenable': 'error',

    /*
     * Disallow @ts-<directive> comments or require descriptions after directives
     * https://typescript-eslint.io/rules/ban-ts-comment/
     */
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': false,
        minimumDescriptionLength: 3,
      },
    ],

    /*
     * Disallow // tslint:<rule-flag> comments
     * https://typescript-eslint.io/rules/ban-tslint-comment/
     */
    '@typescript-eslint/ban-tslint-comment': 'error',

    /*
     * Disallow certain types
     * https://typescript-eslint.io/rules/ban-types/
     */
    '@typescript-eslint/ban-types': 'error',

    /*
     * Enforce that literals on classes are exposed in a consistent style
     * https://typescript-eslint.io/rules/class-literal-property-style/
     */
    '@typescript-eslint/class-literal-property-style': ['error', 'fields'],

    /*
     * Enforce specifying generic type arguments on type annotation or constructor name of a constructor call
     * https://typescript-eslint.io/rules/consistent-generic-constructors/
     */
    '@typescript-eslint/consistent-generic-constructors': [
      'error',
      'constructor',
    ],

    /*
     * Require or disallow the Record type
     * https://typescript-eslint.io/rules/consistent-indexed-object-style/
     */
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],

    /*
     * Enforce consistent usage of type assertions
     * https://typescript-eslint.io/rules/consistent-type-assertions/
     */
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow',
      },
    ],

    /*
     * Enforce type definitions to consistently use either interface or type
     * https://typescript-eslint.io/rules/consistent-type-definitions/
     */
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    /*
     * Enforce consistent usage of type exports
     * https://typescript-eslint.io/rules/consistent-type-exports/
     */
    '@typescript-eslint/consistent-type-exports': [
      'error',
      {
        fixMixedExportsWithInlineTypeSpecifier: false,
      },
    ],

    /*
     * Enforce consistent usage of type imports
     * https://typescript-eslint.io/rules/consistent-type-imports/
     */
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
        disallowTypeAnnotations: true,
      },
    ],

    /*
     * Require explicit return types on functions and class methods
     * @typescript-eslint/explicit-function-return-type
     */
    '@typescript-eslint/explicit-function-return-type': 'error',

    /*
     * Require explicit accessibility modifiers on class properties and methods
     * https://typescript-eslint.io/rules/explicit-member-accessibility/
     */
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
      },
    ],

    /*
     * Require explicit return and argument types on exported functions' and classes' public class methods
     * https://typescript-eslint.io/rules/explicit-module-boundary-types/
     */
    '@typescript-eslint/explicit-module-boundary-types': 'error',

    /*
     * Require a consistent member declaration order
     * https://typescript-eslint.io/rules/member-ordering/
     */
    '@typescript-eslint/member-ordering': 'off',

    /*
     * Enforce using a particular method signature syntax
     * https://typescript-eslint.io/rules/method-signature-style/
     */
    '@typescript-eslint/method-signature-style': ['error', 'property'],

    /*
     * Enforce naming conventions for everything across a codebase
     * https://typescript-eslint.io/rules/naming-convention/
     */
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],

    /*
     * Require .toString() to only be called on objects which provide useful information when stringified
     * https://typescript-eslint.io/rules/no-base-to-string/
     */
    '@typescript-eslint/no-base-to-string': 'error',

    /*
     * Disallow non-null assertion in locations that may be confusing
     * https://typescript-eslint.io/rules/no-confusing-non-null-assertion/
     */
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',

    /*
     * Require expressions of type void to appear in statement position
     * https://typescript-eslint.io/rules/no-confusing-void-expression/
     */
    '@typescript-eslint/no-confusing-void-expression': 'error',

    /*
     * Disallow duplicate enum member values
     * https://typescript-eslint.io/rules/no-duplicate-enum-values/
     */
    '@typescript-eslint/no-duplicate-enum-values': 'error',

    /*
     * Disallow duplicate constituents of union or intersection types
     * https://typescript-eslint.io/rules/no-duplicate-type-constituents/
     */
    '@typescript-eslint/no-duplicate-type-constituents': 'error',

    /*
     * Disallow using the delete operator on computed key expressions
     * https://typescript-eslint.io/rules/no-dynamic-delete/
     */
    '@typescript-eslint/no-dynamic-delete': 'error',

    /*
     * Disallow the declaration of empty interfaces
     * https://typescript-eslint.io/rules/no-empty-interface/
     */
    '@typescript-eslint/no-empty-interface': 'warn',

    /*
     * Disallow usage of the any type
     * https://typescript-eslint.io/rules/no-explicit-any/
     */
    '@typescript-eslint/no-explicit-any': 'error',

    /*
     * Disallow extra non-null assertion
     * https://typescript-eslint.io/rules/no-extra-non-null-assertion/
     */
    '@typescript-eslint/no-extra-non-null-assertion': 'error',

    /*
     * Disallow classes used as namespaces
     * https://typescript-eslint.io/rules/no-extraneous-class/
     */
    '@typescript-eslint/no-extraneous-class': 'error',

    /*
     * Require Promise-like statements to be handled appropriately
     * https://typescript-eslint.io/rules/no-floating-promises/
     */
    '@typescript-eslint/no-floating-promises': 'error',

    /*
     * Disallow iterating over an array with a for-in loop
     * https://typescript-eslint.io/rules/no-for-in-array/
     */
    '@typescript-eslint/no-for-in-array': 'error',

    /*
     * Disallow usage of the implicit any type in catch clauses
     * https://typescript-eslint.io/rules/no-implicit-any-catch/
     */
    '@typescript-eslint/no-implicit-any-catch': 'off', // Deprecated

    /*
     * Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers
     * https://typescript-eslint.io/rules/no-import-type-side-effects/
     */
    '@typescript-eslint/no-import-type-side-effects': 'error',

    /*
     * Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
     * https://typescript-eslint.io/rules/no-inferrable-types/
     */
    '@typescript-eslint/no-inferrable-types': 'error',

    /*
     * Disallow void type outside of generic or return types
     * https://typescript-eslint.io/rules/no-invalid-void-type/
     */
    '@typescript-eslint/no-invalid-void-type': 'error',

    /*
     * Disallow the void operator except when used to discard a value
     * https://typescript-eslint.io/rules/no-meaningless-void-operator/
     */
    '@typescript-eslint/no-meaningless-void-operator': 'error',

    /*
     * Enforce valid definition of new and constructor
     * https://typescript-eslint.io/rules/no-misused-new/
     */
    '@typescript-eslint/no-misused-new': 'error',

    /*
     * Disallow Promises in places not designed to handle them
     * https://typescript-eslint.io/rules/no-misused-promises/
     */
    '@typescript-eslint/no-misused-promises': 'error',

    /*
     * Disallow enums from having both number and string members
     * https://typescript-eslint.io/rules/no-mixed-enums/
     */
    '@typescript-eslint/no-mixed-enums': 'error',

    /*
     * Disallow TypeScript namespaces
     * https://typescript-eslint.io/rules/no-namespace/
     */
    '@typescript-eslint/no-namespace': 'error',

    /*
     * Disallow non-null assertions in the left operand of a nullish coalescing operator
     * https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing/
     */
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',

    /*
     * Disallow non-null assertions after an optional chain expression
     * https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain/
     */
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

    /*
     * Disallow non-null assertions using the ! postfix operator
     * https://typescript-eslint.io/rules/no-non-null-assertion/
     */
    '@typescript-eslint/no-non-null-assertion': 'error',

    /*
     * Disallow the use of parameter properties in class constructors
     * https://typescript-eslint.io/rules/no-parameter-properties/
     */
    '@typescript-eslint/no-parameter-properties': 'off', // Deprecated for parameter-properties

    /*
     * Disallow members of unions and intersections that do nothing or override type information
     * https://typescript-eslint.io/rules/no-redundant-type-constituents/
     */
    '@typescript-eslint/no-redundant-type-constituents': 'error',

    /*
     * Disallow invocation of require()
     * https://typescript-eslint.io/rules/no-require-imports/
     */
    '@typescript-eslint/no-require-imports': 'error',

    /*
     * Disallow aliasing this
     * https://typescript-eslint.io/rules/no-this-alias/
     */
    '@typescript-eslint/no-this-alias': 'error',

    /*
     * Disallow type aliases
     * https://typescript-eslint.io/rules/no-type-alias/
     */
    '@typescript-eslint/no-type-alias': [
      'error',
      {
        allowAliases: 'never',
        allowCallbacks: 'never',
        allowConditionalTypes: 'never',
        allowConstructors: 'never',
        allowLiterals: 'never',
        allowMappedTypes: 'never',
        allowTupleTypes: 'never',
        allowGenerics: 'never',
      },
    ],

    /*
     * Disallow unnecessary equality comparisons against boolean literals
     * https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare/
     */
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

    /*
     * Disallow conditionals where the type is always truthy or always falsy
     * https://typescript-eslint.io/rules/no-unnecessary-condition/
     */
    '@typescript-eslint/no-unnecessary-condition': 'error',

    /*
     * Disallow unnecessary namespace qualifiers
     * https://typescript-eslint.io/rules/no-unnecessary-qualifier/
     */
    '@typescript-eslint/no-unnecessary-qualifier': 'error',

    /*
     * Disallow type arguments that are equal to the default
     * https://typescript-eslint.io/rules/no-unnecessary-type-arguments/
     */
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',

    /*
     * Disallow type assertions that do not change the type of an expression
     * https://typescript-eslint.io/rules/no-unnecessary-type-assertion/
     */
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',

    /*
     * Disallow unnecessary constraints on generic types
     * https://typescript-eslint.io/rules/no-unnecessary-type-constraint/
     */
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',

    /*
     * Disallow calling a function with a value with type any
     * https://typescript-eslint.io/rules/no-unsafe-argument/
     */
    '@typescript-eslint/no-unsafe-argument': 'error',

    /*
     * Disallow assigning a value with type any to variables and properties
     * https://typescript-eslint.io/rules/no-unsafe-assignment/
     */
    '@typescript-eslint/no-unsafe-assignment': 'error',

    /*
     * Disallow calling a value with type any
     * https://typescript-eslint.io/rules/no-unsafe-call/
     */
    '@typescript-eslint/no-unsafe-call': 'error',

    /*
     * Disallow unsafe declaration merging
     * https://typescript-eslint.io/rules/no-unsafe-declaration-merging/
     */
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',

    /*
     * Disallow comparing an enum value with a non-enum value
     * https://typescript-eslint.io/rules/no-unsafe-enum-comparison/
     */
    '@typescript-eslint/no-unsafe-enum-comparison': 'error',

    /*
     * Disallow member access on a value with type any
     * https://typescript-eslint.io/rules/no-unsafe-member-access/
     */
    '@typescript-eslint/no-unsafe-member-access': 'error',

    /*
     * Disallow returning a value with type any from a function
     * https://typescript-eslint.io/rules/no-unsafe-return/
     */
    '@typescript-eslint/no-unsafe-return': 'error',

    /*
     * Disallow empty exports that don't change anything in a module file
     * https://typescript-eslint.io/rules/no-useless-empty-export/
     */
    '@typescript-eslint/no-useless-empty-export': 'warn',

    /*
     * Disallow require statements except in import statements
     * https://typescript-eslint.io/rules/no-var-requires/
     */
    '@typescript-eslint/no-var-requires': 'error',

    /*
     * Enforce non-null assertions over explicit type casts
     * https://typescript-eslint.io/rules/non-nullable-type-assertion-style/
     */
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',

    /*
     * Require or disallow parameter properties in class constructors
     * https://typescript-eslint.io/rules/parameter-properties
     */
    '@typescript-eslint/parameter-properties': [
      'error',
      { allow: [], prefer: 'class-property' },
    ],

    /*
     * Enforce the use of as const over literal type
     * https://typescript-eslint.io/rules/prefer-as-const/
     */
    '@typescript-eslint/prefer-as-const': 'error',

    /*
     * Require each enum member value to be explicitly initialized
     * https://typescript-eslint.io/rules/prefer-enum-initializers/
     */
    '@typescript-eslint/prefer-enum-initializers': 'error',

    /*
     * Enforce the use of for-of loop over the standard for loop where possible
     * https://typescript-eslint.io/rules/prefer-for-of/
     */
    '@typescript-eslint/prefer-for-of': 'off',

    /*
     * Enforce using function types instead of interfaces with call signatures
     * https://typescript-eslint.io/rules/prefer-function-type/
     */
    '@typescript-eslint/prefer-function-type': 'error',

    /*
     * Enforce includes method over indexOf method
     * https://typescript-eslint.io/rules/prefer-includes/
     */
    '@typescript-eslint/prefer-includes': 'error',

    /*
     * Require all enum members to be literal values
     * https://typescript-eslint.io/rules/prefer-literal-enum-member/
     */
    '@typescript-eslint/prefer-literal-enum-member': 'error',

    /*
     * Require using namespace keyword over module keyword to declare custom TypeScript modules
     * https://typescript-eslint.io/rules/prefer-namespace-keyword/
     */
    '@typescript-eslint/prefer-namespace-keyword': 'error',

    /*
     * Enforce using the nullish coalescing operator instead of logical chaining
     * https://typescript-eslint.io/rules/prefer-nullish-coalescing/
     */
    '@typescript-eslint/prefer-nullish-coalescing': 'error',

    /*
     * Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects
     * https://typescript-eslint.io/rules/prefer-optional-chain/
     */
    '@typescript-eslint/prefer-optional-chain': 'error',

    /*
     * Require private members to be marked as readonly if they're never modified outside of the constructor
     * https://typescript-eslint.io/rules/prefer-readonly/
     */
    '@typescript-eslint/prefer-readonly': 'off',

    /*
     * Require function parameters to be typed as readonly to prevent accidental mutation of inputs
     * https://typescript-eslint.io/rules/prefer-readonly-parameter-types/
     */
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',

    /*
     * Enforce using type parameter when calling Array#reduce instead of casting
     * https://typescript-eslint.io/rules/prefer-reduce-type-parameter/
     */
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',

    /*
     * Enforce RegExp#exec over String#match if no global flag is provided
     * https://typescript-eslint.io/rules/prefer-regexp-exec/
     */
    '@typescript-eslint/prefer-regexp-exec': 'error',

    /*
     * Enforce that this is used when only this type is returned
     * https://typescript-eslint.io/rules/prefer-return-this-type/
     */
    '@typescript-eslint/prefer-return-this-type': 'error',

    /*
     * Enforce using String#startsWith and String#endsWith over other equivalent methods of checking substrings
     * https://typescript-eslint.io/rules/prefer-string-starts-ends-with/
     */
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',

    /*
     * Enforce using @ts-expect-error over @ts-ignore
     * https://typescript-eslint.io/rules/prefer-ts-expect-error/
     */
    '@typescript-eslint/prefer-ts-expect-error': 'error',

    /*
     * Require any function or method that returns a Promise to be marked async
     * https://typescript-eslint.io/rules/promise-function-async/
     */
    '@typescript-eslint/promise-function-async': 'off',

    /*
     * Require Array#sort calls to always provide a compareFunction
     * https://typescript-eslint.io/rules/require-array-sort-compare/
     */
    '@typescript-eslint/require-array-sort-compare': 'error',

    /*
     * Require both operands of addition to be the same type and be bigint, number, or string
     * https://typescript-eslint.io/rules/restrict-plus-operands/
     */
    '@typescript-eslint/restrict-plus-operands': 'error',

    /*
     * Enforce template literal expressions to be of string type
     * https://typescript-eslint.io/rules/restrict-template-expressions/
     */
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      { allowNumber: true },
    ],

    /*
     * Enforce constituents of a type union/intersection to be sorted alphabetically
     * https://typescript-eslint.io/rules/sort-type-constituents/
     */
    '@typescript-eslint/sort-type-constituents': 'off',

    /*
     * Enforce members of a type union/intersection to be sorted alphabetically
     * https://typescript-eslint.io/rules/sort-type-union-intersection-members/
     */
    '@typescript-eslint/sort-type-union-intersection-members': 'off', // Deprecated for sort-type-constituents

    /*
     * Disallow certain types in boolean expressions
     * https://typescript-eslint.io/rules/strict-boolean-expressions/
     */
    '@typescript-eslint/strict-boolean-expressions': 'off',

    /*
     * Require switch-case statements to be exhaustive with union type
     * https://typescript-eslint.io/rules/switch-exhaustiveness-check/
     */
    '@typescript-eslint/switch-exhaustiveness-check': 'error',

    /*
     * Disallow certain triple slash directives in favor of ES6-style import declarations
     * https://typescript-eslint.io/rules/triple-slash-reference/
     */
    '@typescript-eslint/triple-slash-reference': 'error',

    /*
     * Require type annotations in certain places
     * https://typescript-eslint.io/rules/typedef/
     */
    '@typescript-eslint/typedef': 'off',

    /*
     * Enforce unbound methods are called with their expected scope
     * https://typescript-eslint.io/rules/unbound-method/
     */
    '@typescript-eslint/unbound-method': 'error',

    /*
     * Disallow two overloads that could be unified into one with a union or an optional/rest parameter
     * https://typescript-eslint.io/rules/unified-signatures/
     */
    '@typescript-eslint/unified-signatures': 'error',

    /*
     * Enforce default parameters to be last
     * https://typescript-eslint.io/rules/default-param-last/
     */
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',

    /*
     * Enforce dot notation whenever possible
     * https://typescript-eslint.io/rules/dot-notation/
     */
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'error',

    /*
     * Require or disallow initialization in variable declarations
     * https://typescript-eslint.io/rules/init-declarations/
     */
    'init-declarations': 'off',
    '@typescript-eslint/init-declarations': 'off',

    /*
     * Disallow generic Array constructors
     * https://typescript-eslint.io/rules/no-array-constructor/
     */
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',

    /*
     * Disallow duplicate class members
     * https://typescript-eslint.io/rules/no-dupe-class-members/
     */
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',

    /*
     * Disallow duplicate imports
     * https://typescript-eslint.io/rules/no-duplicate-imports/
     */
    '@typescript-eslint/no-duplicate-imports': 'off', // Deprecated in favor of import/no-duplicates

    /*
     * Disallow empty functions
     * https://typescript-eslint.io/rules/no-empty-function/
     */
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions', 'functions', 'methods'],
      },
    ],

    /*
     * Disallow the use of eval()-like methods
     * https://typescript-eslint.io/rules/no-implied-eval/
     */
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'error',

    /*
     * Disallow this keywords outside of classes or class-like objects
     * https://typescript-eslint.io/rules/no-invalid-this/
     */
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'error',

    /*
     * Disallow function declarations that contain unsafe references inside loop statements
     * https://typescript-eslint.io/rules/no-loop-func/
     */
    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',

    /*
     * Disallow literal numbers that lose precision
     * https://typescript-eslint.io/rules/no-loss-of-precision/
     */
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'error',

    /*
     * Disallow magic numbers
     * https://typescript-eslint.io/rules/no-magic-numbers/
     */
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',

    /*
     * Disallow variable redeclaration
     * https://typescript-eslint.io/rules/no-redeclare/
     */
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',

    /*
     * Disallow specified modules when loaded by import
     * https://typescript-eslint.io/rules/no-restricted-imports/
     */
    'no-restricted-imports': 'off',
    '@typescript-eslint/no-restricted-imports': 'off',

    /*
     * Disallow variable declarations from shadowing variables declared in the outer scope
     * https://typescript-eslint.io/rules/no-shadow/
     */
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    /*
     * Disallow throwing literals as exceptions
     * https://typescript-eslint.io/rules/no-throw-literal/
     */
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': 'error',

    /*
     * Disallow unused expressions
     * https://typescript-eslint.io/rules/no-unused-expressions/
     */
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],

    /*
     * Disallow unused variables
     * https://typescript-eslint.io/rules/no-unused-vars/
     */
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

    /*
     * Disallow the use of variables before they are defined
     * https://typescript-eslint.io/rules/no-use-before-define/
     */
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',

    /*
     * Disallow unnecessary constructors
     * https://typescript-eslint.io/rules/no-useless-constructor
     */
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    /*
     * Disallow async functions which have no await expression
     * https://typescript-eslint.io/rules/require-await/
     */
    'require-await': 'off',
    '@typescript-eslint/require-await': 'error',

    /*
     * Enforce consistent returning of awaited values
     * https://typescript-eslint.io/rules/return-await/
     */
    'no-return-await': 'off',
    '@typescript-eslint/return-await': 'error',
  },
};
