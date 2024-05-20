import React from 'react'
import { createComponent } from '@lit/react'
import {
  GdsFilterChips,
  GdsFilterChip,
} from '@sebgroup/green-core/components/filter-chips/index.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

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
