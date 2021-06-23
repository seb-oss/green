const { resolve } = require('path')

module.exports = {
  stories: [
    '../src/stories/**/*.stories.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  webpackFinal: (config) => {
    config.module.rules.push({ test: /\.hbs$/, loader: "handlebars-loader" })
    config.module.rules.push({
      test: /\.ejs$/,
      loader: 'ejs-webpack-loader',
      include: resolve(__dirname, '../src/stories'),
    })
    return config
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@whitespace/storybook-addon-html',
  ]
}
