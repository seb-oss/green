// .storybook/manager.ts
import { addons } from '@storybook/manager-api'
import { defaultConfig } from 'storybook-addon-tag-badges'

import '../../../.storybook/manager'

import type { TagBadgeParameters } from 'storybook-addon-tag-badges'

addons.setConfig({
  tagBadges: [
    {
      tags: 'beta',
      badge: {
        text: 'BETA',
        bgColor: '#001c13',
        fgColor: '#e0eb0b',
        tooltip: 'The API of component is subject to change',
      },
      display: {
        sidebar: ['component', 'group'],
        toolbar: true,
      },
    },
    ...defaultConfig,
  ] satisfies TagBadgeParameters,
})
