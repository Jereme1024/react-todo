module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'jest': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'google',
    'plugin:react/jsx-runtime',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'semi': ['error', 'never'],
    'indent': ['error', 2],
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'max-len': ['error', { 'code': 180 }],
    'require-jsdoc': 0,
    'linebreak-style': 0,
    'space-infix-ops': ['error', { 'int32Hint': false }],
    'eqeqeq': ['error', 'always'],
    'react/prop-types': 'off',
  },
}
