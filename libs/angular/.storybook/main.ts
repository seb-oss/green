// This file has been automatically migrated to valid ESM format by Storybook.
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'

/* eslint-disable @nx/enforce-module-boundaries */
import type { StorybookConfig } from '@storybook/angular'

import defaultConfig from '../../../.storybook/main'

const require = createRequire(import.meta.url)

const config: StorybookConfig = {
  ...defaultConfig,
  framework: '@storybook/angular',
  webpack: (config) => {
    return {
      ...config,
      optimization: {
        nodeEnv: 'production',
      },
      // Ignore sass-loader warnings
      ignoreWarnings: [
        {
          module: /sass-loader/,
        },
      ],
    }
  },
}

export default config
