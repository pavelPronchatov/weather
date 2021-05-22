module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'react/prop-types': 0,
    semi: 'off',
    'no-use-before-define': 'off',
    'object-curly-spacing': 'off',
    'no-trailing-spaces': 'off',
    'eol-last': 'off'
  }
}
