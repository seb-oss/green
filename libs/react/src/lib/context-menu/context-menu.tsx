import React from 'react'
import { createComponent } from '@lit/react'

import {
  GdsContextMenu,
  GdsMenuItem,
  getScopedTagName,
} from '@sebgroup/green-core'
import { registerTransitionalStyles } from '@sebgroup/green-core/transitional-styles'

registerTransitionalStyles()

export const ContextMenu = createComponent({
  tagName: getScopedTagName('gds-context-menu'),
  elementClass: GdsContextMenu,
  events: {
    onMenuItemClick: 'gds-menu-item-click',
    onUiStateChange: 'gds-ui-state',
  },
  react: React,
})

export const MenuItem = createComponent({
  tagName: getScopedTagName('gds-menu-item'),
  elementClass: GdsMenuItem,
  events: { onMenuItemClick: 'gds-menu-item-click' },
  react: React,
})
