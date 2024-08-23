import React from 'react'
import { createComponent } from '@lit/react'
import { IconCalenderAdd } from '@sebgroup/green-core/components/icon/icons/calender-add'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const CalenderAdd = createComponent({
  tagName: getScopedTagName('gds-icon-calender-add'),
  elementClass: IconCalenderAdd,
  react: React
})
