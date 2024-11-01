/* eslint-disable @nx/enforce-module-boundaries */
import React, { createElement } from 'react'

import '../../../.storybook/manager'

import { addons } from '@storybook/manager-api'

// import '../src/components/badge/index.js'

const betaItems = {
  Layout: true,
  Form: true,
  Input: true,
  Textarea: true,
  Media: true,
  Content: true,
  Style: true,
  'Rich Text': true,
  Dialog: true,
  Badge: true,
  Button: true,
  Calendar: true,
  Dropdown: true,
  Card: true,
  Coachmark: true,
  Container: true,
  'Context Menu': true,
  Datepicker: true,
  Divider: true,
  FAB: true,
  'Filter Chips': true,
  Flex: true,
  Grid: true,
  'Grouped List': true,
  Icon: true,
  Link: true,
  Image: true,
  Mask: true,
  'Menu button': true,
  Popover: true,
  'Segmented Control': true,
  Signal: true,
  Spacer: true,
  Text: true,
  Theme: true,
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
