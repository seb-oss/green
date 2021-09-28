const CopyPlugin = require('copy-webpack-plugin');

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
        ...config.plugins,
        new CopyPlugin({
          patterns: [{
            from: './node_modules/@sebgroup/fonts/fonts', to: '../fonts'}
          ]}
        )
      ]
    }
    console.log(config);

    // Return the altered config
    return config;
  },
}
