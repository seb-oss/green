import React from 'react'
import { createComponent } from '@lit/react'
import { IconSquareArrowTopRight } from '@sebgroup/green-core/components/icon/icons/square-arrow-top-right'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const SquareArrowTopRight = createComponent({
  tagName: getScopedTagName('gds-icon-square-arrow-top-right'),
  elementClass: IconSquareArrowTopRight,
  react: React
})
