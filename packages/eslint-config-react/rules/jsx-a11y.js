// https://github.com/devsenexx/eslint-plugin-jsx-a11y
module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['jsx-a11y'],
  extends: ['plugin:jsx-a11y/strict'],
  rules: {},
};
