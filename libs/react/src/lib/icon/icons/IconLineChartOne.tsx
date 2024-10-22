import React from 'react'
import { createComponent } from '@lit/react'
import { IconLineChartOne as Icon } from '@sebgroup/green-core/components/icon/icons/line-chart-one.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconLineChartOne = createComponent({
  tagName: getScopedTagName('gds-icon-line-chart-one'),
  elementClass: Icon,
  react: React,
})
