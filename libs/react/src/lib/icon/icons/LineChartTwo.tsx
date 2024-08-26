import React from 'react'
import { createComponent } from '@lit/react'
import { IconLineChartTwo } from '@sebgroup/green-core/components/icon/icons/line-chart-two'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const LineChartTwo = createComponent({
  tagName: getScopedTagName('gds-icon-line-chart-two'),
  elementClass: IconLineChartTwo,
  react: React
})
