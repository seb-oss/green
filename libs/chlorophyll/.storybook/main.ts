/* eslint-disable @nx/enforce-module-boundaries */
import type { StorybookConfig } from '@storybook/html-webpack5'

import defaultConfig from '../../../.storybook/main'

const config: StorybookConfig = {
  ...defaultConfig,
  framework: {
    name: '@storybook/html-webpack5',
    options: {},
  },
}

export default config

/* To customize your webpack configuration you can use the webpackFinal field.
 * Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
 * and https://nx.dev/recipes/storybook/custom-builder-configs
 */
