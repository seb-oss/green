import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowWallDown } from '@sebgroup/green-core/components/icon/icons/arrow-wall-down'
import { getScopedTagName } from '@sebgroup/green-core/scoping'
export const ArrowWallDown = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-wall-down'),
  elementClass: IconArrowWallDown,
  react: React
})