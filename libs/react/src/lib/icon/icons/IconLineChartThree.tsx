import React from 'react'
import { createComponent } from '@lit/react'

import { IconLineChartThree as Icon } from '@sebgroup/green-core/components/icon/icons/line-chart-three.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconLineChartThree = createComponent({
  tagName: getScopedTagName('gds-icon-line-chart-three'),
  elementClass: Icon,
  react: React,
})
