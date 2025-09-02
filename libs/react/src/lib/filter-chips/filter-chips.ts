import React from 'react'
import { createComponent } from '@lit/react'

import {
  GdsFilterChip,
  GdsFilterChips,
} from '@sebgroup/green-core/components/filter-chips/filter-chips.component'
import { register as registerTranistionalStyles } from '@sebgroup/green-core/components/filter-chips/filter-chips.trans.styles.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

GdsFilterChips.define()
registerTranistionalStyles()

/**
 * @deprecated Please use the `gds-filter-chips` web component from green-core instead
 */
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
