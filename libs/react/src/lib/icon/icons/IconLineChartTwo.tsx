import React from 'react'
import { createComponent } from '@lit/react'

import { IconLineChartTwo as Icon } from '@sebgroup/green-core/components/icon/icons/line-chart-two.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconLineChartTwo = createComponent({
  tagName: getScopedTagName('gds-icon-line-chart-two'),
  elementClass: Icon,
  react: React,
})
