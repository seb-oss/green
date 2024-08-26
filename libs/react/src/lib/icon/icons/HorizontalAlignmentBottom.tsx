import React from 'react'
import { createComponent } from '@lit/react'
import { IconHorizontalAlignmentBottom } from '@sebgroup/green-core/components/icon/icons/horizontal-alignment-bottom'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const HorizontalAlignmentBottom = createComponent({
  tagName: getScopedTagName('gds-icon-horizontal-alignment-bottom'),
  elementClass: IconHorizontalAlignmentBottom,
  react: React
})
