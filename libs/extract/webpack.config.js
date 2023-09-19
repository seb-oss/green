const { composePlugins, withNx } = require('@nx/webpack')

module.exports = composePlugins(withNx(), (config, { options, context }) => {
  // customize webpack config here
  return config
})
