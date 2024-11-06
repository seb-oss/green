'use client'

import { GdsFilterChip, GdsFilterChips } from '$/import/components'

const FilterChips = () => (
  <GdsFilterChips value="filter" label="Pick news channel">
    <GdsFilterChip value="filter">Filter</GdsFilterChip>
    <GdsFilterChip value="chips">Chips</GdsFilterChip>
  </GdsFilterChips>
)

export default FilterChips
