import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowOutOfBox as Icon } from '@sebgroup/green-core/components/icon/icons/arrow-out-of-box'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconArrowOutOfBox = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-out-of-box'),
  elementClass: Icon,
  react: React
})
