import React from 'react'
import { createComponent } from '@lit/react'

import { IconCalendar as Icon } from '@sebgroup/green-core/components/icon/icons/calendar.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconCalendar = createComponent({
  tagName: getScopedTagName('gds-icon-calendar'),
  elementClass: Icon,
  react: React,
})
