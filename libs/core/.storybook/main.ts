// eslint-disable-next-line @nx/enforce-module-boundaries
import defaultConfig from '../../../.storybook/main'
import type { StorybookConfig } from '@storybook/web-components-webpack5'

const config: StorybookConfig = {
  ...defaultConfig,
  framework: {
    name: '@storybook/web-components-webpack5',
    options: {},
  },
}

export default config

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
