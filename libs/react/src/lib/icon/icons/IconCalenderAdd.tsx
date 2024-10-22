import React from 'react'
import { createComponent } from '@lit/react'
import { IconCalenderAdd as Icon } from '@sebgroup/green-core/components/icon/icons/calender-add.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconCalenderAdd = createComponent({
  tagName: getScopedTagName('gds-icon-calender-add'),
  elementClass: Icon,
  react: React,
})
