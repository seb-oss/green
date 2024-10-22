import React from 'react'
import { createComponent } from '@lit/react'
import { IconLineChartFour as Icon } from '@sebgroup/green-core/components/icon/icons/line-chart-four.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconLineChartFour = createComponent({
  tagName: getScopedTagName('gds-icon-line-chart-four'),
  elementClass: Icon,
  react: React,
})
