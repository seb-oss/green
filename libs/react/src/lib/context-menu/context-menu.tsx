import React from 'react'
import { createComponent } from '@lit/react'

import {
  GdsContextMenu,
  GdsMenuHeading,
  GdsMenuItem,
} from '@sebgroup/green-core/components/context-menu/index.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'
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

export const CoreMenuHeading = createComponent({
  tagName: getScopedTagName('gds-menu-heading'),
  elementClass: GdsMenuHeading,
  react: React,
})
