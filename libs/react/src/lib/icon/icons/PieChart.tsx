import React from 'react'
import { createComponent } from '@lit/react'
import { IconPieChart } from '@sebgroup/green-core/components/icon/icons/pie-chart'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const PieChart = createComponent({
  tagName: getScopedTagName('gds-icon-pie-chart'),
  elementClass: IconPieChart,
  react: React
})
