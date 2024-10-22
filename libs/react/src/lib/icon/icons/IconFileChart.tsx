import React from 'react'
import { createComponent } from '@lit/react'
import { IconFileChart as Icon } from '@sebgroup/green-core/components/icon/icons/file-chart.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconFileChart = createComponent({
  tagName: getScopedTagName('gds-icon-file-chart'),
  elementClass: Icon,
  react: React,
})
