import React from 'react'
import { createComponent } from '@lit/react'
import { IconCalendarCheck } from '@sebgroup/green-core/components/icon/icons/calendar-check'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const CalendarCheck = createComponent({
  tagName: getScopedTagName('gds-icon-calendar-check'),
  elementClass: IconCalendarCheck,
  react: React
})
