module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/prefer-default-export': 'off',
    'comma-dangle': 'off',
    'react/prop-types': 'warn',
    'no-restricted-syntax': 'off',
    'max-len': ['error', { code: 200 }],
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'jsx-quotes': 'off',
    'react/jsx-curly-newline': 'off',
  },
};
