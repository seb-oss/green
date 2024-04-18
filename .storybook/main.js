const EventHooksPlugin = require('event-hooks-webpack-plugin')
const copyfiles = require('copyfiles')
const fs = require('fs')
const path = require('path')

module.exports = {
  core: {
    builder: 'webpack5',
  },
  features: {
    buildStoriesJson: true,
  },

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    'storybook-dark-mode',
    path.resolve('./.storybook/addons/run-in-iframe/run-in-iframe-preset.js'),
    path.resolve('./.storybook/addons/designlibrary/generate-json-preset.js'),
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  staticDirs: ['../../../dist/fonts', '../../../.storybook/assets'],
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
                console.log('Font directory does not exist. Copying fonts...')
                await new Promise((resolve) =>
                  copyfiles(
                    ['node_modules/@sebgroup/fonts/fonts/**/*', 'dist/fonts'],
                    { up: true },
                    resolve,
                  ),
                )
                  .catch((_) => [{ success: false }])
                  .then((_) => [{ success: true }])
              } else {
                console.log("Font directory already exist. Won't copy fonts...")
              }
            })
          },
        }),
        ...config.plugins,
      ],
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
        ],
      },
    }

    // Return the altered config
    return config
  },
  managerWebpack: (config, options) => {
    options.cache && (options.cache.set = () => Promise.resolve())
    return config
  },
}
