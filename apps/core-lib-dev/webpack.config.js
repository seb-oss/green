const { composePlugins, withNx, withWeb } = require('@nx/webpack')

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withWeb(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`

  config.module.rules.find((rule) =>
    rule.test.toString().includes('scss'),
  ).exclude = [/\.styles.scss$/]

  config.module.rules.push({
    test: /\.styles.scss$/,
    exclude: /node_modules/,
    use: [
      'sass-to-string',
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            outputStyle: 'compressed',
          },
        },
      },
    ],
  })

  return config
})
