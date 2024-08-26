import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowDown } from '@sebgroup/green-core/components/icon/icons/arrow-down'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ArrowDown = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-down'),
  elementClass: IconArrowDown,
  react: React
})
