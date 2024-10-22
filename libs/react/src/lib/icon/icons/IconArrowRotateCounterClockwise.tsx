import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowRotateCounterClockwise as Icon } from '@sebgroup/green-core/components/icon/icons/arrow-rotate-counter-clockwise.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconArrowRotateCounterClockwise = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-rotate-counter-clockwise'),
  elementClass: Icon,
  react: React,
})
