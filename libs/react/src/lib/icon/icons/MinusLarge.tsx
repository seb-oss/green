import React from 'react'
import { createComponent } from '@lit/react'
import { IconMinusLarge } from '@sebgroup/green-core/components/icon/icons/minus-large'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const MinusLarge = createComponent({
  tagName: getScopedTagName('gds-icon-minus-large'),
  elementClass: IconMinusLarge,
  react: React
})
