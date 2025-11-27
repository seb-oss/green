/* eslint-disable @nx/enforce-module-boundaries */
import React, { createElement } from 'react'

import '../../../.storybook/manager'

import { addons } from 'storybook/manager-api'

const betaItems = {
  Alert: true,
  Blur: true,
  Coachmark: true,
  Form: true,
  'Form summary': true,
  'Formatted text': true,
  Mask: true,
  Spinner: true,
  Video: true,
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

      // console.log(item['parent'])
      // console.log(api)

      const itemType = 'type-' + item.type
      const itemParent =
        item['parent'] !== undefined ? 'parent-' + item['parent'] : ''

      return createElement(
        'div',
        {
          className: `gds-item ${itemType} ${itemParent} ${childrenClass} ${'depth-' + item.depth} ${'item-' + item.name.toLowerCase().replace(/\s+/g, '-')}`,
        },
        createElement('span', null, item.name),
        betaItems[item.name] ? createElement('gds-badge', null, 'BETA') : null,
      )
    },
  },
})
