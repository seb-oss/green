import { createComponent } from '@lit-labs/react'
import * as React from 'react'
import { GdsTooltip } from './tooltip'

export const TooltipReact = createComponent({
  tagName: 'gds-tooltip',
  elementClass: GdsTooltip,
  react: React,
})
