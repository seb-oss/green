'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const GdsCalendar = dynamic(
  () =>
    import('@sebgroup/green-react/core/calendar').then(
      (mod) => mod.GdsCalendar,
    ),
  {
    ssr: false,
  },
)

const GdsFlex = dynamic(
  () => import('@sebgroup/green-react/core/flex').then((mod) => mod.GdsFlex),
  {
    ssr: false,
  },
)
const GdsMask = dynamic(
  () => import('@sebgroup/green-react/core/mask').then((mod) => mod.GdsMask),
  {
    ssr: false,
  },
)

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
