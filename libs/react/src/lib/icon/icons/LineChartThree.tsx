import React from 'react'
import { createComponent } from '@lit/react'
import { IconLineChartThree } from '@sebgroup/green-core/components/icon/icons/line-chart-three'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const LineChartThree = createComponent({
  tagName: getScopedTagName('gds-icon-line-chart-three'),
  elementClass: IconLineChartThree,
  react: React
})
