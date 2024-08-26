import React from 'react'
import { createComponent } from '@lit/react'
import { IconChartPresentation } from '@sebgroup/green-core/components/icon/icons/chart-presentation'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ChartPresentation = createComponent({
  tagName: getScopedTagName('gds-icon-chart-presentation'),
  elementClass: IconChartPresentation,
  react: React
})
