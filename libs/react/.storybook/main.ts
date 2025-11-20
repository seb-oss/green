import { createRequire } from "node:module";
import { dirname, join } from "node:path";
/* eslint-disable @nx/enforce-module-boundaries */
import type { StorybookConfig } from '@storybook/react-vite'

import defaultConfig from '../../../.storybook/main'

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  ...defaultConfig,
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
}

config.addons?.push('@nx/react/plugins/storybook')

export default config

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
