// https://github.com/devsenexx/eslint-plugin-jsx-a11y
module.exports = {
  plugins: ['jsx-a11y'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: ['plugin:jsx-a11y/strict'],

  rules: {},
};
