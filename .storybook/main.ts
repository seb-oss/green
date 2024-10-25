import * as fs from 'fs'

import type { StorybookConfig } from '@storybook/angular'

const EventHooksPlugin = require('event-hooks-webpack-plugin')
const copyfiles = require('copyfiles')

const config: Omit<StorybookConfig, 'framework'> = {
  stories: ['../src/**/*.mdx', '../**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-styling-webpack',
  ],
  webpackFinal: async (config, { configType }) => {
    config.plugins?.push(
      new EventHooksPlugin({
        compile: async () => {
          fs.access('dist/fonts', async (error) => {
            if (error) {
              console.log('Font directory does not exist. Copying fonts...')
              await new Promise((resolve) =>
                copyfiles(
                  [
                    'node_modules/@sebgroup/fonts/fonts/SEBSansSerif/*',
                    'dist/fonts/SEBSansSerif',
                  ],
                  { up: true },
                  resolve,
                ),
              )
                .catch((_) => [{ success: false }])
                .then((_) => [{ success: true }])
            } else {
              console.log("Font directory already exist. Won't copy fonts...")
            }
          })
        },
      }),
    )

    config.module?.rules?.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    })

    return config
  },
}

export default config

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
