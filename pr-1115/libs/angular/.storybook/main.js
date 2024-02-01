const rootMain = require('../../../.storybook/main')

module.exports = {
  ...rootMain,

  stories: [
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-essentials', ...rootMain.addons],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType })
    }

    // add your own webpack tweaks if needed

    // workaround for: https://github.com/storybookjs/storybook/issues/16759
    const tsConfig = require('../../../tsconfig.base.json')
    const pathConfigs = tsConfig.compilerOptions.paths
    for (const key of Object.keys(pathConfigs)) {
      config.resolve.alias[key] = pathConfigs[key][0]
    }

    return config
  },
}
