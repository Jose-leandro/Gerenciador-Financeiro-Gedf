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
    'plugin:@next/next/recommended', 
    'next', 
    'next/core-web-vitals', 
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
    'no-unsanitized',
    'sonarjs',
    'scanjs-rules',
    'import',
    'next',
  ],
  rules: {
    'jsx-a11y/alt-text': 2,
    'jsx-a11y/anchor-has-content': 2,
    'security/detect-object-injection': 'warn',
    'no-unsanitized/method': 'error',
    'no-unsanitized/property': 'error',
    'sonarjs/no-duplicate-string': 'warn',
    'scanjs-rules/no-assign-to-global': 'warn',
    'scanjs-rules/no-implied-eval': 'error',
    'scanjs-rules/no-unsanitized-input': 'error',
    'import/no-cycle': 'warn', // Temporarily warn on import cycles
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
      alias: {
        map: [
          ['@', './src', './app'], 
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
};
