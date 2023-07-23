module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', project: './tsconfig.json' },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react-refresh/only-export-components': 'warn',
    'react/react-in-jsx-scope': 'off',
    'linebreak-style': 'off',
    'import/no-extraneous-dependencies': [
      'error', { devDependencies: false, optionalDependencies: false, peerDependencies: false },
    ],
    'no-console': 'error',
    'max-lines': ['error', 80],
  },
};
