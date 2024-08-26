import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowWallUp } from '@sebgroup/green-core/components/icon/icons/arrow-wall-up'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ArrowWallUp = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-wall-up'),
  elementClass: IconArrowWallUp,
  react: React
})
