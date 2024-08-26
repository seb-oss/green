import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowRotateClockwise } from '@sebgroup/green-core/components/icon/icons/arrow-rotate-clockwise'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ArrowRotateClockwise = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-rotate-clockwise'),
  elementClass: IconArrowRotateClockwise,
  react: React
})
