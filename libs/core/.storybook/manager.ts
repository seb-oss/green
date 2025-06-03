/* eslint-disable @nx/enforce-module-boundaries */
import React, { createElement } from 'react'

import '../../../.storybook/manager'

import { addons } from '@storybook/manager-api'

const betaItems = {
  Layout: true,
  Form: true,
  Input: true,
  Textarea: true,
  Media: true,
  Content: true,
  Style: true,
  'Rich Text': true,
  Details: true,
  Dialog: true,
  Badge: true,
  Blur: true,
  Breadcrumbs: true,
  Dropdown: true,
  Card: true,
  Checkbox: true,
  Coachmark: true,
  Container: true,
  Datepicker: true,
  Divider: true,
  Flex: true,
  'Formatted text': true,
  Grid: true,
  Link: true,
  Image: true,
  Mask: true,
  Signal: true,
  Select: true,
  Spacer: true,
  Text: true,
  Theme: true,
  Video: true,
  Div: true,
  Spinner: true,
  Radio: true,
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
