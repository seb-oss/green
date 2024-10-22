import React from 'react'
import { createComponent } from '@lit/react'
import { IconHorizontalAlignmentBottom as Icon } from '@sebgroup/green-core/components/icon/icons/horizontal-alignment-bottom.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconHorizontalAlignmentBottom = createComponent({
  tagName: getScopedTagName('gds-icon-horizontal-alignment-bottom'),
  elementClass: Icon,
  react: React,
})
