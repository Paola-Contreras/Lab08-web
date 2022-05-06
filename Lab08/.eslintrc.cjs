module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-alert': [0],
    semi: [2, 'never'],
    'linebreak-style': 0,
    'react/prop-types': [0],
    'import/no-cycle': 'off',
    eqeqeq: ['error', 'always'],
    'react/jsx-filename-extension': 0,
    'arrow-body-style': ['error', 'always'],
    'import/extensions': [2, { jsx: 'always' }],
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
  },

}
