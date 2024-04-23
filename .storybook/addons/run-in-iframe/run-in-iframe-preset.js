const InjectPlugin = require('webpack-inject-plugin').default
const fs = require('fs')
const path = require('path')

module.exports = {
  managerWebpack: async (config, options) => {
    config.plugins.push(
      new InjectPlugin(function () {
        return fs.readFileSync(path.resolve(__dirname, `./run-in-iframe.js`))
      }),
    )
    return config
  },
}
