import React from 'react'
import { createComponent } from '@lit/react'
import { IconChartOne as Icon } from '@sebgroup/green-core/components/icon/icons/chart-one.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconChartOne = createComponent({
  tagName: getScopedTagName('gds-icon-chart-one'),
  elementClass: Icon,
  react: React,
})
