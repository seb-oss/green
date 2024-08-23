import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowRotateLeftRight } from '@sebgroup/green-core/components/icon/icons/arrow-rotate-left-right'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ArrowRotateLeftRight = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-rotate-left-right'),
  elementClass: IconArrowRotateLeftRight,
  react: React
})
