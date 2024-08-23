import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowRightUpCircle } from '@sebgroup/green-core/components/icon/icons/arrow-right-up-circle'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ArrowRightUpCircle = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-right-up-circle'),
  elementClass: IconArrowRightUpCircle,
  react: React
})
