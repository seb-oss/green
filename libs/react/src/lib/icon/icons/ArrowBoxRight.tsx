import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowBoxRight } from '@sebgroup/green-core/components/icon/icons/arrow-box-right'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ArrowBoxRight = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-box-right'),
  elementClass: IconArrowBoxRight,
  react: React
})
