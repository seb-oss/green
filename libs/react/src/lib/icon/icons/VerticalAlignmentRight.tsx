import React from 'react'
import { createComponent } from '@lit/react'
import { IconVerticalAlignmentRight } from '@sebgroup/green-core/components/icon/icons/vertical-alignment-right'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const VerticalAlignmentRight = createComponent({
  tagName: getScopedTagName('gds-icon-vertical-alignment-right'),
  elementClass: IconVerticalAlignmentRight,
  react: React
})
