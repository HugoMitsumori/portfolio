module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': ['error', 'always-multiline'],
    curly: 'off',
    eqeqeq: 'off',
    'block-scoped-var': 'error',
    indent: 'off',
    complexity: 'error',
    'max-lines': ['error', { max: 120, skipBlankLines: true, skipComments: true }],
    'max-lines-per-function': ['error', { max: 20, skipBlankLines: true, skipComments: true }],
    'max-statements': 'error',
    'dot-notation': 'off',
    'no-unused-vars': 'off',
    'no-alert': 'error',
    'no-extra-parens': ['error', 'functions'],
    'no-template-curly-in-string': 'error',
    'no-return-assign': 'off',
    'no-mixed-operators': 'off',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-nested-ternary': 'error',
    'no-param-reassign': 'error',
    'no-useless-return': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'space-before-function-paren': 'off',
    'semi-spacing': ['error', { before: true, after: true }],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'comma-spacing': 'error',
    'eol-last': 'error',
    'max-depth': ['error', 3],
    'no-var': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-spread': 'error',
    'object-curly-spacing': ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/max-attributes-per-line': ['error', { singleline: 5, multiline: 1 }],
    'vue/html-self-closing': ['error', { html: { void: 'always' } }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-closing-bracket-spacing': 'error',
    'vue/order-in-components': 'error',
    'vue/no-v-html': 'off',
    'vue/script-indent': ['error', 2, { baseIndent: 1, ignores: ['IfStatement'] }],
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/typedef': 'error',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        mocha: true,
      },
    },
  ],
}
