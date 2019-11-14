'use strict'

module.exports = {
  plugins: ['node'],
  extends: ['eslint:recommended', 'plugin:node/recommended', 'prettier'],
  rules: {
    strict: 'error',
    'node/shebang': 'off',
    'node/no-unsupported-features/node-builtins': [
      'error',
      { version: '>=11.14' },
    ],
  },
}
