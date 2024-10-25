/* eslint-disable @nx/enforce-module-boundaries */
import type { StorybookConfig } from '@storybook/web-components-vite'

const config: StorybookConfig = {
  //...defaultConfig,
  stories: ['../src/**/*.mdx', '../**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-links',
  ],
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
