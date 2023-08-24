module.exports = {
  plugins: ['import'],
  rules: {
    'import/named': 'off',
    'import/default': 'off',
    'import/namespace': 'off',
    'import/consistent-type-specifier-style': 'off',
    'import/no-named-as-default-member': 'off',

    // Complex rule and not very useful when using TypeScript
    'import/no-unresolved': ['off', { commonjs: false, caseSensitive: true }],

    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
      },
    ],
  },
};
