import React from 'react'
import { createComponent } from '@lit/react'
import { IconMinusSmall as Icon } from '@sebgroup/green-core/components/icon/icons/minus-small.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconMinusSmall = createComponent({
  tagName: getScopedTagName('gds-icon-minus-small'),
  elementClass: Icon,
  react: React,
})
