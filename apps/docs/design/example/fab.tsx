// eslint-disable-next-line
'use client'

import React from 'react'
import dynamic from 'next/dynamic'

// import { GdsFab } from '@sebgroup/green-react/core/fab'
// import { GdsSignal } from '@sebgroup/green-react/core/signal'

const GdsFab = dynamic(() => import('@sebgroup/green-react/src/core/fab'), {
  ssr: false,
})

const GdsSignal = dynamic(
  () => import('@sebgroup/green-react/src/core/signal'),
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
