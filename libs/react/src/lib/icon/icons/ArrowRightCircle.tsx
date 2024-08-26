import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowRightCircle } from '@sebgroup/green-core/components/icon/icons/arrow-right-circle'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ArrowRightCircle = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-right-circle'),
  elementClass: IconArrowRightCircle,
  react: React
})
