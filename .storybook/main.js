const EventHooksPlugin = require('event-hooks-webpack-plugin');
const copyfiles = require('copyfiles');


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
            console.log('Copying fonts');
              await new Promise(resolve => copyfiles(['node_modules/@sebgroup/fonts/fonts/**/*', 'dist/fonts'], { up: true }, resolve))
                .catch(_ => [{ success: false }])
                .then(_ => [{ success: true }])
          }
        }),
        ...config.plugins,
      ]
    }

    // Return the altered config
    return config;
  },
}
