import React from 'react'
import { createComponent } from '@lit/react'

import { IconChartPresentation as Icon } from '@sebgroup/green-core/components/icon/icons/chart-presentation.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconChartPresentation = createComponent({
  tagName: getScopedTagName('gds-icon-chart-presentation'),
  elementClass: Icon,
  react: React,
})
