// https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
module.exports = {
  plugins: ['react-hooks'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    // Enforce Rules of Hooks
    'react-hooks/rules-of-hooks': 'error',

    // Verify the list of the dependencies for Hooks like useEffect and similar
    'react-hooks/exhaustive-deps': 'error',
  },
};
