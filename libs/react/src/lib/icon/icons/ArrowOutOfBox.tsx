import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowOutOfBox } from '@sebgroup/green-core/components/icon/icons/arrow-out-of-box'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ArrowOutOfBox = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-out-of-box'),
  elementClass: IconArrowOutOfBox,
  react: React
})
