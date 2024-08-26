import React from 'react'
import { createComponent } from '@lit/react'
import { IconCalendar } from '@sebgroup/green-core/components/icon/icons/calendar'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Calendar = createComponent({
  tagName: getScopedTagName('gds-icon-calendar'),
  elementClass: IconCalendar,
  react: React
})
