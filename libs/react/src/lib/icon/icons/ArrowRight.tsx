import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowRight } from '@sebgroup/green-core/components/icon/icons/arrow-right'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ArrowRight = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-right'),
  elementClass: IconArrowRight,
  react: React
})
