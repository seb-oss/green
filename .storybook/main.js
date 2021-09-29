const EventHooksPlugin = require('event-hooks-webpack-plugin');
const copyfiles = require('copyfiles');
const fs = require('fs')


module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: [],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-dark-mode",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  // uncomment the property below if you want to apply some webpack config globally
  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need that should apply to all storybook configs

    config = {
      ...config,
      plugins: [
        new EventHooksPlugin({
          compile: async () => {
            fs.access('dist/fonts', async (error) => {
              if (error) {
                console.log('Font directory does not exist. Copy fonts...')
                await new Promise(resolve => copyfiles(['node_modules/@sebgroup/fonts/fonts/**/*', 'dist/fonts'], { up: true }, resolve))
                  .catch(_ => [{ success: false }])
                  .then(_ => [{ success: true }])
              } else {
                console.log('Font directory already exist. Don\'t copy fonts...')
              }
            })
          }
        }),
        ...config.plugins,
      ]
    }

    // Return the altered config
    return config;
  },
}
