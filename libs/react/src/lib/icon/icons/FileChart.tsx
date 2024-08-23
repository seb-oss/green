import React from 'react'
import { createComponent } from '@lit/react'
import { IconFileChart } from '@sebgroup/green-core/components/icon/icons/file-chart'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const FileChart = createComponent({
  tagName: getScopedTagName('gds-icon-file-chart'),
  elementClass: IconFileChart,
  react: React
})
