import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowWallRight } from '@sebgroup/green-core/components/icon/icons/arrow-wall-right'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ArrowWallRight = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-wall-right'),
  elementClass: IconArrowWallRight,
  react: React
})
