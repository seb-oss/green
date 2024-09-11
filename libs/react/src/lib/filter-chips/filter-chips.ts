import React from 'react'
import { createComponent } from '@lit/react'
import {
  GdsFilterChips,
  GdsFilterChip,
} from '@sebgroup/green-core/components/filter-chips/index.js'
import { register as registerTranistionalStyles } from '@sebgroup/green-core/components/filter-chips/filter-chips.trans.styles.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

registerTranistionalStyles()

export const FilterChips = createComponent({
  tagName: getScopedTagName('gds-filter-chips'),
  elementClass: GdsFilterChips,
  react: React,
})

export const FilterChip = createComponent({
  tagName: getScopedTagName('gds-filter-chip'),
  elementClass: GdsFilterChip,
  react: React,
})
