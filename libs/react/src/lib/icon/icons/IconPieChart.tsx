import React from 'react'
import { createComponent } from '@lit/react'

import { IconPieChart as Icon } from '@sebgroup/green-core/components/icon/icons/pie-chart.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconPieChart = createComponent({
  tagName: getScopedTagName('gds-icon-pie-chart'),
  elementClass: Icon,
  react: React,
})
