import React from 'react'
import { createComponent } from '@lit/react'
import { IconChartTwo } from '@sebgroup/green-core/components/icon/icons/chart-two'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ChartTwo = createComponent({
  tagName: getScopedTagName('gds-icon-chart-two'),
  elementClass: IconChartTwo,
  react: React
})
