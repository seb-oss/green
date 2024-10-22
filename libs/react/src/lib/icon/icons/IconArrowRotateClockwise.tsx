import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowRotateClockwise as Icon } from '@sebgroup/green-core/components/icon/icons/arrow-rotate-clockwise.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconArrowRotateClockwise = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-rotate-clockwise'),
  elementClass: Icon,
  react: React,
})
