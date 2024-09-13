/* eslint-disable @nx/enforce-module-boundaries */
import React, { createElement } from 'react'
import '../../../.storybook/manager'
import { addons } from '@storybook/manager-api'
// import '../src/components/badge/index.js'

const betaItems = {
  Layout: true,
  Form: true,
  Input: true,
  Media: true,
  Content: true,
  Style: true,
}

addons.setConfig({
  sidebar: {
    showRoots: false,
    renderLabel: (item, api) => {
      const levels = item.id.split('-').filter((part) => part !== '--docs')
      const lastLevelIndex = levels.length
      const levelClass = `level-${lastLevelIndex}`
      const childrenClass =
        'children' in item && item.children.length > 0
          ? 'has-children'
          : 'no-children'

      console.log(item)
      return createElement(
        'div',
        {
          className: `gds-item ${levelClass} ${childrenClass} ${'item-' + item.name.toLowerCase().replace(/\s+/g, '-')}`,
        },
        item.name,
        betaItems[item.name] ? createElement('gds-badge', null, 'BETA') : null,
      )
    },
  },
})
