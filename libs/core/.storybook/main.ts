// This file has been automatically migrated to valid ESM format by Storybook.
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'

/* eslint-disable @nx/enforce-module-boundaries */
import type { StorybookConfig } from '@storybook/web-components-vite'

const require = createRequire(import.meta.url)

const config: StorybookConfig = {
  //...defaultConfig,
  stories: ['../src/**/*.mdx', '../**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-links'),
  ],
  core: {
    builder: import.meta.resolve('@storybook/builder-vite'), // 👈 The builder enabled here.
  },
  framework: {
    name: getAbsolutePath('@storybook/web-components-vite'),
    options: {},
  },
  previewHead: (head) => `
    <script>globalThis.GDS_DISABLE_VERSIONED_ELEMENTS = true</script>
    ${head}
  `,
}

export default config

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
