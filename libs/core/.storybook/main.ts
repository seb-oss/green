/* eslint-disable @nx/enforce-module-boundaries */
//import defaultConfig from '../../../.storybook/main'
import type { StorybookConfig } from '@storybook/web-components-webpack5'

const config: StorybookConfig = {
  //...defaultConfig,
  stories: ['../src/**/*.mdx', '../**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-docs'],
  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  previewHead: (head) => `
    <script>globalThis.GDS_DISABLE_VERSIONED_ELEMENTS = true</script>
    ${head}
  `,
}

export default config

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
