module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
  ],
  overrides: [
    {
      'files': [
        '**/*.spec.js',
        '**/*.test.js'
      ],
      'env': {
        'jest': true
      }
    }
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
    ecmaVersion: 2018,
    allowImportExportEverywhere: true,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: '16.12.0',
    }
  },
  plugins: [
    'react'
  ]
}
