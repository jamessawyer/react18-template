/* eslint-disable global-require */
const { override, addWebpackAlias } = require('customize-cra')
const path = require('path')

const resolveAlias = (dir) => path.join(__dirname, '.', dir)

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
  webpack(config, env) {
    supportMjs()
    override(
      addWebpackAlias({
        '@': resolveAlias('src')
      })
    )
    require('react-app-rewire-postcss')(config, true)
    return config
  }
}
