const rootMain = require('../../../.storybook/main')

module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack5' },
  stories: [
    '../src/introduction/**/*.stories.mdx',
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    ...rootMain.addons,
    '@nx/react/plugins/storybook',
  ],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType })
    }

    config.module.rules.find((rule) =>
      rule.test.toString().includes('scss')
    ).exclude = [/\.styles.scss$/]

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
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {},
  },
}
