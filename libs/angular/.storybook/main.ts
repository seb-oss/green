import { createRequire } from "node:module";
import { dirname, join } from "node:path";
/* eslint-disable @nx/enforce-module-boundaries */
import type { StorybookConfig } from '@storybook/angular'

import defaultConfig from '../../../.storybook/main'

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  ...defaultConfig,
  framework: getAbsolutePath("@storybook/angular"),
}

export default config

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
