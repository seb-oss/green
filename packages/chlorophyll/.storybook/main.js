module.exports = {
  stories: [
    '../src/stories/**/*.stories.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  webpackFinal: (config) => {
    console.log(config)
    config.module.rules.push({ test: /\.hbs$/, loader: "handlebars-loader" })
    return config
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@whitespace/storybook-addon-html',
  ]
}
