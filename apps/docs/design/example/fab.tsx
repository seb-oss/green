'use client'

import React from 'react'
import { GdsFab } from '@sebgroup/green-react/core/fab'
import { GdsSignal } from '@sebgroup/green-react/core/signal'

const FAB = () => (
  <>
    <GdsFab variant="positive" inset="0" rank="secondary" position="relative">
      Secondary <GdsSignal slot="trail"></GdsSignal>
    </GdsFab>
  </>
)

export default FAB
