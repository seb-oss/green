const { composePlugins, withNx } = require('@nrwl/webpack')

module.exports = composePlugins(withNx(), (config, { options, context }) => {
  // customize webpack config here
  return config
})
