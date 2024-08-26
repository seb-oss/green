import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowWallLeft } from '@sebgroup/green-core/components/icon/icons/arrow-wall-left'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ArrowWallLeft = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-wall-left'),
  elementClass: IconArrowWallLeft,
  react: React
})
