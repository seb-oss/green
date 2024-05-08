/* eslint-disable @nx/enforce-module-boundaries */
import defaultConfig from '../../../.storybook/main'
import type { StorybookConfig } from '@storybook/react-webpack5'

const config: StorybookConfig = {
  ...defaultConfig,
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
}

config.addons?.push('@nx/react/plugins/storybook')

export default config

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
