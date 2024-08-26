import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowUp } from '@sebgroup/green-core/components/icon/icons/arrow-up'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ArrowUp = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-up'),
  elementClass: IconArrowUp,
  react: React
})
