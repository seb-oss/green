import React from 'react'
import { createComponent } from '@lit/react'
import { GdsGroupedList, getScopedTagName } from '@sebgroup/green-core'
import { registerTransitionalStyles } from '@sebgroup/green-core/transitional-styles'

registerTransitionalStyles()

export const GroupedList = createComponent({
  tagName: getScopedTagName('gds-grouped-list'),
  elementClass: GdsGroupedList,
  react: React,
})
