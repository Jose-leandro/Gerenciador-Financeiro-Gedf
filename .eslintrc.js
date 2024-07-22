module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:security/recommended',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
    'jsx-a11y',
    'security',
  ],
  rules: {
    "jsx-a11y/alt-text": 2,
    "jsx-a11y/anchor-has-content": 2
  },
};
