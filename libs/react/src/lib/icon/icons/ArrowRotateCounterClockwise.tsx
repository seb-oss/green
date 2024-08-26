import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowRotateCounterClockwise } from '@sebgroup/green-core/components/icon/icons/arrow-rotate-counter-clockwise'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ArrowRotateCounterClockwise = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-rotate-counter-clockwise'),
  elementClass: IconArrowRotateCounterClockwise,
  react: React
})
