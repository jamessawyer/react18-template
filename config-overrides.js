const { override } = require('customize-cra')

// fix
// https://github.com/formatjs/formatjs/issues/1395#issuecomment-518823361
const supportMjs = () => (webpackConfig) => {
  webpackConfig.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: 'javascript/auto'
  })
  return webpackConfig
}

module.exports = {
  webpack: override(supportMjs())
}
