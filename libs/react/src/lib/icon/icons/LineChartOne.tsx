import React from 'react'
import { createComponent } from '@lit/react'
import { IconLineChartOne } from '@sebgroup/green-core/components/icon/icons/line-chart-one'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const LineChartOne = createComponent({
  tagName: getScopedTagName('gds-icon-line-chart-one'),
  elementClass: IconLineChartOne,
  react: React
})
