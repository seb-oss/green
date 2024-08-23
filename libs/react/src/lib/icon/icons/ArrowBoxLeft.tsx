import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowBoxLeft } from '@sebgroup/green-core/components/icon/icons/arrow-box-left'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ArrowBoxLeft = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-box-left'),
  elementClass: IconArrowBoxLeft,
  react: React
})
