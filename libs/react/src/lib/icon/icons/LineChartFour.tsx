import React from 'react'
import { createComponent } from '@lit/react'
import { IconLineChartFour } from '@sebgroup/green-core/components/icon/icons/line-chart-four'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const LineChartFour = createComponent({
  tagName: getScopedTagName('gds-icon-line-chart-four'),
  elementClass: IconLineChartFour,
  react: React
})
