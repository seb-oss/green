'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const GdsFilterChips = dynamic(
  () =>
    import('@sebgroup/green-react/core/filter-chips').then(
      (mod) => mod.GdsFilterChips,
    ),
  {
    ssr: false,
  },
)
const GdsFilterChip = dynamic(
  () =>
    import('@sebgroup/green-react/core/filter-chip').then(
      (mod) => mod.GdsFilterChip,
    ),
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
