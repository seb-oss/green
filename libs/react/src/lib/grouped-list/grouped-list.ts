import React from 'react'
import { createComponent } from '@lit/react'

import {
  GdsGroupedList,
  GdsListItem,
} from '@sebgroup/green-core/components/grouped-list/grouped-list.component'
import { getScopedTagName } from '@sebgroup/green-core/scoping'
import { registerTransitionalStyles } from '@sebgroup/green-core/transitional-styles'

GdsGroupedList.define()
registerTransitionalStyles()

export const GroupedList = createComponent({
  tagName: getScopedTagName('gds-grouped-list'),
  elementClass: GdsGroupedList,
  react: React,
})

export const ListItem = createComponent({
  tagName: getScopedTagName('gds-list-item'),
  elementClass: GdsListItem,
  react: React,
})
