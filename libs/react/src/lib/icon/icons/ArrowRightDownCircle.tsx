import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowRightDownCircle } from '@sebgroup/green-core/components/icon/icons/arrow-right-down-circle'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ArrowRightDownCircle = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-right-down-circle'),
  elementClass: IconArrowRightDownCircle,
  react: React
})
