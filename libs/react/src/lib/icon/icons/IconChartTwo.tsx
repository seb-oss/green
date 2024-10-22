import React from 'react'
import { createComponent } from '@lit/react'

import { IconChartTwo as Icon } from '@sebgroup/green-core/components/icon/icons/chart-two.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconChartTwo = createComponent({
  tagName: getScopedTagName('gds-icon-chart-two'),
  elementClass: Icon,
  react: React,
})
