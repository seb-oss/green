import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowLeftRight } from '@sebgroup/green-core/components/icon/icons/arrow-left-right'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ArrowLeftRight = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-left-right'),
  elementClass: IconArrowLeftRight,
  react: React
})
