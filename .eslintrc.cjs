module.exports = {
  root: true,
  env: { browser: true, node: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  // ignorePatterns: [], // 👈Define into .eslintignore
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  plugins: [
    'react',
    'react-hooks',
    'react-refresh',
    'jsx-a11y',
    'import',
  ],
  rules: {
    // 👇react-refresh
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],

    // 👇react-hooks: https://www.npmjs.com/package/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // 👇react: https://github.com/jsx-eslint/eslint-plugin-react/tree/master
    'react/prop-types': 0,
    'react/display-name': 0,
    'react/jsx-filename-extension': [1, { 'extensions': ['.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,

    // 👇jsx-a1y: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/label-has-associated-control': 1,

    // 👇eslint-plugin-import: https://github.com/import-js/eslint-plugin-import
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/no-absolute-path': 0,
    'import/prefer-default-export': 'off',

    // 👇eslint: https://eslint.org/docs/latest/rules/
    'array-bracket-spacing': 1,
    'arrow-spacing': 1,
    'arrow-body-style': ["error", "as-needed"],
    'comma-dangle': 1,
    'comma-spacing': 1,
    'consistent-return': 0,
    'dot-notation': ['error', { 'allowPattern': '^(_[a-z]+)+[a-z]+$' }],
    'indent': ['warn', 2],
    'keyword-spacing': 1,
    'linebreak-style': 0,
    'no-console': 1,
    'no-unused-vars': 1,
    'no-lonely-if': 1,
    'no-trailing-spaces': 1,
    'no-multi-spaces': 1,
    'no-undef': 'error',
    'no-multiple-empty-lines': 1,
    'no-unexpected-multiline': 'warn',
    'no-nested-ternary': 1,
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true,
      }
    ],
    'quote-props': ['error', 'consistent-as-needed'],
    'space-before-blocks': ['error', 'always'],
    'semi': 'warn',
    'prefer-const': 'error',
    'object-curly-spacing': [1, 'always'],
    'wrap-iife': ['error', 'any'],
  },
}
