// This file has been automatically migrated to valid ESM format by Storybook.
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'

import type { StorybookConfig } from '@storybook/angular'

const require = createRequire(import.meta.url)

const config: Omit<StorybookConfig, 'framework'> = {
  stories: ['../src/**/*.mdx', '../**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: ['@storybook/addon-docs'],
}

export default config

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
