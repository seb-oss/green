'use client'

import React from 'react'
import dynamic from 'next/dynamic'

// import { GdsCalendar } from '@sebgroup/green-react/core/calendar'
// import { GdsFlex } from '@sebgroup/green-react/core/flex'
// import { GdsMask } from '@sebgroup/green-react/core/mask'

const GdsCalendar = dynamic(
  () => import('@sebgroup/green-react/core/calendar'),
  {
    ssr: false,
  },
)
const GdsFlex = dynamic(() => import('@sebgroup/green-react/core/flex'), {
  ssr: false,
})
const GdsMask = dynamic(() => import('@sebgroup/green-react/core/mask'), {
  ssr: false,
})

const Calendar = () => (
  <GdsFlex position="relative" height="200px">
    <GdsMask
      inset="0"
      mask-image="top"
      background-color="secondary/0.96"
      position="absolute"
      z-index="4"
      pointer-events="none"
    ></GdsMask>
    <GdsCalendar></GdsCalendar>
  </GdsFlex>
)

export default Calendar
