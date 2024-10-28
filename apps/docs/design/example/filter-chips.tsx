'use client'

import React from 'react'
import dynamic from 'next/dynamic'

// import { GdsFilterChip } from '@sebgroup/green-react/core/filter-chip'
// import { GdsFilterChips } from '@sebgroup/green-react/core/filter-chips'

const GdsFilterChip = dynamic(
  () => import('@sebgroup/green-react/src/core/filter-chip'),
  {
    ssr: false,
  },
)

const GdsFilterChips = dynamic(
  () => import('@sebgroup/green-react/src/core/filter-chips'),
  {
    ssr: false,
  },
)

const FilterChips = () => (
  <>
    <GdsFilterChips value="filter" label="Pick news channel">
      <GdsFilterChip value="filter">Filter</GdsFilterChip>
      <GdsFilterChip value="chips">Chips</GdsFilterChip>
    </GdsFilterChips>
  </>
)

export default FilterChips
