import React from 'react'
import { createComponent } from '@lit/react'
import { IconMinusSmall } from '@sebgroup/green-core/components/icon/icons/minus-small'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const MinusSmall = createComponent({
  tagName: getScopedTagName('gds-icon-minus-small'),
  elementClass: IconMinusSmall,
  react: React
})
