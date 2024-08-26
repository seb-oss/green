import React from 'react'
import { createComponent } from '@lit/react'
import { IconChartOne } from '@sebgroup/green-core/components/icon/icons/chart-one'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ChartOne = createComponent({
  tagName: getScopedTagName('gds-icon-chart-one'),
  elementClass: IconChartOne,
  react: React
})
