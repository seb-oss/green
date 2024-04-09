const rootMain = require('../../../.storybook/main')

module.exports = {
  core: { builder: 'webpack5' },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType })
    }

    // config.module.rules.find((rule) =>
    //   rule.test.toString().includes('scss')
    // ).exclude = [/\.styles.scss$/]

    // add your own webpack tweaks if needed
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
  },
  managerWebpack: (config, options) => {
    options.cache && (options.cache.set = () => Promise.resolve())
    return config
  },
}
