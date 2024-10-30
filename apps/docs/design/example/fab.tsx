'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const GdsFab = dynamic(
  () => import('@sebgroup/green-react/core/fab').then((mod) => mod.GdsFab),
  {
    ssr: false,
  },
)

const GdsSignal = dynamic(
  () =>
    import('@sebgroup/green-react/core/signal').then((mod) => mod.GdsSignal),
  {
    ssr: false,
  },
)

const FAB = () => (
  <>
    <GdsFab variant="positive" inset="0" rank="secondary" position="relative">
      Secondary <GdsSignal slot="trail"></GdsSignal>
    </GdsFab>
  </>
)

export default FAB
