'use client'

import { GdsFab, GdsSignal } from '$/import/components'

const FAB = () => (
  <GdsFab variant="positive" inset="0" rank="secondary" position="relative">
    Secondary <GdsSignal slot="trail"></GdsSignal>
  </GdsFab>
)

export default FAB
