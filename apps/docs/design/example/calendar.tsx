import React from 'react'
import GdsMask from '@sebgroup/green-react/src/core/mask'
import GdsCalendar from '@sebgroup/green-react/src/core/calendar'

const Calendar = () => (
  <>
    <GdsMask
      inset="0"
      mask-image="top"
      background-color="secondary/0.96"
      position="absolute"
      z-index="4"
      pointer-events="none"
    ></GdsMask>
    <GdsCalendar></GdsCalendar>
  </>
)

export default Calendar
