import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowRotateRightLeft } from '@sebgroup/green-core/components/icon/icons/arrow-rotate-right-left'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ArrowRotateRightLeft = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-rotate-right-left'),
  elementClass: IconArrowRotateRightLeft,
  react: React
})
