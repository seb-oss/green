import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowLeft } from '@sebgroup/green-core/components/icon/icons/arrow-left'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ArrowLeft = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-left'),
  elementClass: IconArrowLeft,
  react: React
})
