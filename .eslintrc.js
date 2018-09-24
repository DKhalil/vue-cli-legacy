module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'generator-star-spacing': 'off',
    'no-trailing-spaces': 'off',
    'no-multi-spaces': 'off',
    'key-spacing': 'off',
    'indent': ['error', 2, { 'MemberExpression': 0 }],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
