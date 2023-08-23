module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    /*
     * Enforces consistent naming for boolean props
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
     */
    'react/boolean-prop-naming': [
      'error',
      { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+', validateNested: true },
    ],

    /*
     * Disallow usage of button elements without an explicit type attribute
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
     */
    'react/button-has-type': 'error',

    /*
     * Enforce all defaultProps have a corresponding non-required PropType
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
     * TODO: disabled for typescript ?
     */
    'react/default-props-match-prop-types': 'error',

    /*
     * Enforce consistent usage of destructuring assignment of props, state, and context
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
     */
    'react/destructuring-assignment': ['error', 'always'],

    /*
     * Disallow missing displayName in a React component definition
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
     */
    'react/display-name': 'error',

    /*
     * Disallow certain props on components
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
     */
    'react/forbid-component-props': 'off',

    /*
     * Disallow certain props on DOM Nodes
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
     */
    'react/forbid-dom-props': 'off',

    /*
     * Disallow certain elements
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
     */
    'react/forbid-elements': 'off',

    /*
     * 	Disallow using another component's propTypes
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
     * TODO: disabled for typescript ?
     */
    'react/forbid-foreign-prop-types': 'error',

    /*
     * Disallow certain propTypes
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
     */
    'react/forbid-prop-types': 'off',

    /*
     * Enforce a specific function type for function components
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
     */
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    /*
     * Ensure destructuring and symmetric naming of useState hook value and setter variables
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md
     */
    'react/hook-use-state': 'error',

    /*
     * Enforce sandbox attribute on iframe elements
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/iframe-missing-sandbox.md
     */
    'react/iframe-missing-sandbox': 'error',

    /*
     * Enforce boolean attributes notation in JSX
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
     */
    'react/jsx-boolean-value': ['error', 'never'],

    /*
     * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
     * Disabled, covered by prettier
     */
    'react/jsx-child-element-spacing': 'off',

    /*
     * Enforce closing bracket location in JSX
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
     * Disabled, covered by prettier
     */
    'react/jsx-closing-bracket-location': 'off',

    /*
     * Enforce closing tag location for multiline JSX
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
     * Disabled, covered by prettier
     */
    'react/jsx-closing-tag-location': 'off',

    /*
     * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
     */
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never', propElementValues: 'always' },
    ],

    /*
     * Enforce consistent linebreaks in curly braces in JSX attributes and expressions
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
     * Disabled, covered by prettier
     */
    'react/jsx-curly-newline': 'off',

    /*
     * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
     * Disabled, covered by prettier
     */
    'react/jsx-curly-spacing': 'off',

    /*
     * Enforce or disallow spaces around equal signs in JSX attributes
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
     * Disabled, covered by prettier
     */
    'react/jsx-equals-spacing': 'off',

    /*
     * Disallow file extensions that may contain JSX
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
     */
    'react/jsx-filename-extension': ['error', { extensions: ['jsx', '.tsx'] }],

    /*
     * Enforce proper position of the first property in JSX
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
     * Disabled, covered by prettier
     */
    'react/jsx-first-prop-new-line': 'off',

    /*
     * Enforce shorthand or standard form for React fragments
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
     */
    'react/jsx-fragments': ['error', 'syntax'],

    /*
     * Enforce event handler naming conventions in JSX
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
     */
    'react/jsx-handler-names': [
      'error',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],

    /*
     * Enforce JSX indentation
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
     * Disabled, covered by prettier
     */
    'react/jsx-indent': 'off',

    /*
     * Enforce props indentation in JSX
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
     * Disabled, covered by prettier
     */
    'react/jsx-indent-props': 'off',

    /*
     * Disallow missing key props in iterators/collection literals
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
     * Turned off because it has too many false positives
     */
    'react/jsx-key': 'off',

    /*
     * Enforce JSX maximum depth
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
     */
    'react/jsx-max-depth': 'off',

    /*
     * Enforce maximum of props on a single line in JSX
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
     * Disabled, covered by prettier
     */
    'react/jsx-max-props-per-line': 'off',

    /*
     * Require or prevent a new line after jsx elements and expressions.
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md
     * Disabled, covered by prettier
     */
    'react/jsx-newline': 'off',

    /*
     * Disallow .bind() or arrow functions in JSX props
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
     */
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
      },
    ],

    /*
     * Disallow comments from being inserted as text nodes
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
     */
    'react/jsx-no-comment-textnodes': 'error',

    /*
     * Disallows JSX context provider values from taking values that will cause needless rerenders
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
     */
    'react/jsx-no-constructed-context-values': 'error',

    /*
     * Disallow duplicate properties in JSX
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
     */
    'react/jsx-no-duplicate-props': 'error',

    /*
     * Disallow problematic leaked values from being rendered
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md
     */
    'react/jsx-no-leaked-render': 'error',

    /*
     * Disallow usage of string literals in JSX
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
     */
    'react/jsx-no-literals': 'off',

    /*
     * Disallow usage of javascript: URLs
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
     */
    'react/jsx-no-script-url': 'error',

    /*
     * Disallow target="_blank" attribute without rel="noreferrer"
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
     */
    'react/jsx-no-target-blank': 'error',

    /*
     * Disallow undeclared variables in JSX
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
     */
    'react/jsx-no-undef': ['error', { allowGlobals: true }],

    /*
     * Disallow unnecessary fragments
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
     */
    'react/jsx-no-useless-fragment': 'error',

    /*
     * Require one JSX element per line
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
     * Disabled, covered by prettier
     */
    'react/jsx-one-expression-per-line': 'off',

    /*
     * Enforce PascalCase for user-defined JSX components
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
     */
    'react/jsx-pascal-case': 'error',

    /*
     * Disallow multiple spaces between inline JSX props
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
     * Disabled, covered by prettier
     */
    'react/jsx-props-no-multi-spaces': 'off',

    /*
     * Disallow JSX prop spreading
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
     */
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'enforce',
        custom: 'enforce',
        explicitSpread: 'ignore',
        exceptions: [],
      },
    ],

    /*
     * Enforce props alphabetical sorting
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
     * TODO: activate ?
     */
    'react/jsx-sort-props': 'off',

    /*
     * Enforce whitespace in and around the JSX opening and closing brackets
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
     * Disabled, covered by prettier
     */
    'react/jsx-tag-spacing': 'off',

    /*
     * Disallow React to be incorrectly marked as unused
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
     * Disabled, no longer needed with React 17
     */
    'react/jsx-uses-react': 'off',

    /*
     * Disallow variables used in JSX to be incorrectly marked as unused
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
     */
    'jsx-uses-vars': 'error',

    /*
     * Disallow missing parentheses around multiline JSX
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
     * Disabled, covered by prettier
     */
    'react/jsx-wrap-multilines': 'off',

    /*
     * Disallow when this.state is accessed within setState
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
     */
    'react/no-access-state-in-setstate': 'error',

    /*
     * Disallow adjacent inline elements not separated by whitespace.
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md
     */
    'react/no-adjacent-inline-elements': 'error',

    /*
     * Disallow usage of Array index in keys
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
     */
    'react/no-array-index-key': 'error',

    /*
     * Lifecycle methods should be methods on the prototype, not class fields
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md
     */
    'react/no-arrow-function-lifecycle': 'error',

    /*
     * Disallow passing of children as props
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
     */
    'react/no-children-prop': 'error',

    /*
     * Disallow usage of dangerous JSX properties
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md
     */
    'react/no-danger': 'error',

    /*
     * Disallow when a DOM element is using both children and dangerouslySetInnerHTML
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
     */
    'react/no-danger-with-children': 'error',

    /*
     * Disallow usage of deprecated methods
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
     */
    'react/no-deprecated': 'error',

    /*
     * Disallow usage of setState in componentDidMount
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
     */
    'react/no-did-mount-set-state': 'error',

    /*
     * Disallow usage of setState in componentDidUpdate
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
     */
    'react/no-did-update-set-state': 'error',

    /*
     * Disallow direct mutation of this.state
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
     */
    'react/no-direct-mutation-state': 'error',

    /*
     * Disallow usage of findDOMNode
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
     */
    'react/no-find-dom-node': 'error',

    /*
     * Disallow usage of invalid attributes
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md
     */
    'no-invalid-html-attributes': 'off',

    /*
     * Disallow usage of isMounted
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
     */
    'react/no-is-mounted': 'error',

    /*
     * Disallow multiple component definition per file
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
     */
    'react/no-multi-comp': ['error', { ignoreStateless: true }],

    /*
     * Enforce that namespaces are not used in React elements
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-namespace.md
     */
    'react/no-namespace': 'error',

    /*
     * Disallow usage of referential-type variables as default param in functional component
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-object-type-as-default-prop.md
     */
    'react/no-object-type-as-default-prop': 'error',

    /*
     * Disallow usage of shouldComponentUpdate when extending React.PureComponent
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
     */
    'react/no-redundant-should-component-update': 'error',

    /*
     * Disallow usage of the return value of ReactDOM.render
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
     */
    'react/no-render-return-value': 'error',

    /*
     * Disallow usage of setState
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
     */
    'react/no-set-state': 'off',

    /*
     * Disallow using string references
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
     */
    'react/no-string-refs': 'error',

    /*
     * Disallow this from being used in stateless functional components
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
     */
    'react/no-this-in-sfc': 'error',

    /*
     * Disallow common typos
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-typos.md
     * TODO: turn off in typescript ?
     */
    'react/no-typos': 'error',

    /*
     *	Disallow unescaped HTML entities from appearing in markup
     *  https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
     */
    'react/no-unescaped-entities': 'error',

    /*
     * Disallow usage of unknown DOM property
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
     */
    'react/no-unknown-property': 'error',

    /*
     * Disallow usage of unsafe lifecycle methods
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
     */
    'react/no-unsafe': ['error', { checkAliases: true }],

    /*
     * Disallow creating unstable components inside components
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
     */
    'react/no-unstable-nested-components': 'error',

    /*
     * Disallow declaring unused methods of component class
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md
     */
    'react/no-unused-class-component-methods': 'error',

    /*
     * Disallow definitions of unused propTypes
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
     * TODO: turn off in typescript
     */
    'react/no-unused-prop-types': 'error',

    /*
     * Disallow definitions of unused state
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
     */
    'react/no-unused-state': 'error',

    /*
     * Disallow usage of setState in componentWillUpdate
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
     */
    'react/no-will-update-set-state': 'error',

    /*
     * Enforce ES5 or ES6 class for React Components
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
     */
    'react/prefer-es6-class': ['error', 'always'],

    /*
     * Prefer exact proptype definitions
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md
     */
    'react/prefer-exact-props': 'off',

    /*
     * Enforce that props are read-only
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
     * TODO: enable for typescript
     */
    'react/prefer-read-only-props': 'off',

    /*
     * Enforce stateless components to be written as a pure function
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
     */
    'react/prefer-stateless-function': 'off',

    /*
     * Disallow missing props validation in a React component definition
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
     */
    'react/prop-types': 'error',

    /*
     * Disallow missing React when using JSX
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
     * covered by react 17
     */
    'react/react-in-jsx-scope': 'off',

    /*
     * Enforce a defaultProps definition for every prop that is not a required prop
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
     */
    'react/require-default-props': [
      'error',
      { forbidDefaultForRequired: true },
    ],

    /*
     * Enforce React components to have a shouldComponentUpdate method
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
     */
    'react/require-optimization': 'warn',

    /*
     * Enforce ES5 or ES6 class for returning value in render function
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
     */
    'react/require-render-return': 'error',

    /*
     * Disallow extra closing tags for components without children
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
     */
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],

    /*
     * Enforce component methods order
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
     */
    'react/sort-comp': 'off',

    /*
     * Enforce defaultProps declarations alphabetical sorting
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-default-props.md
     */
    'react/sort-default-props': 'off',

    /*
     * Enforce propTypes declarations alphabetical sorting
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
     */
    'react/sort-prop-types': 'off',

    /*
     * Enforce class component state initialization style
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
     */
    'react/state-in-constructor': ['error', 'always'],

    /*
     * Enforces where React component static properties should be positioned
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
     */
    'react/static-property-placement': 'off',

    /*
     * Enforce style prop value is an object
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
     */
    'react/style-prop-object': 'error',

    /*
     * Disallow void DOM elements (e.g. <img />, <br />) from receiving children
     * https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
     */
    'react/void-dom-elements-no-children': 'error',
  },
};
