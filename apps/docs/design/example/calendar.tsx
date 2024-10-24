'use client'

import React from 'react'
import { GdsFlex } from '@sebgroup/green-react/core/flex'
import { GdsMask } from '@sebgroup/green-react/core/mask'
import { GdsCalendar } from '@sebgroup/green-react/core/calendar'

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
