'use client'

import { GdsCalendar, GdsFlex, GdsMask } from '$/import/components'

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
