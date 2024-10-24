import React from 'react'
import { createComponent } from '@lit/react'

import { IconCalendarCheck as Icon } from '@sebgroup/green-core/components/icon/icons/calendar-check.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconCalendarCheck = createComponent({
  tagName: getScopedTagName('gds-icon-calendar-check'),
  elementClass: Icon,
  react: React,
})
