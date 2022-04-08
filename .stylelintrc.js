module.exports = {
  plugins: ['stylelint-scss', 'stylelint-prettier'],
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
  customSyntax: 'postcss-scss',
  rules: {
    'prettier/prettier': true
  }
}
