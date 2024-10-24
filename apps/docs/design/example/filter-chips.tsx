'use client'

import React from 'react'
import { GdsFilterChips } from '@sebgroup/green-react/core/filter-chips'
import { GdsFilterChip } from '@sebgroup/green-react/core/filter-chip'

const FilterChips = () => (
  <>
    <GdsFilterChips value="filter" label="Pick news channel">
      <GdsFilterChip value="filter">Filter</GdsFilterChip>
      <GdsFilterChip value="chips">Chips</GdsFilterChip>
    </GdsFilterChips>
  </>
)

export default FilterChips
