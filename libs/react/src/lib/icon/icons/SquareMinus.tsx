import React from 'react'
import { createComponent } from '@lit/react'
import { IconSquareMinus } from '@sebgroup/green-core/components/icon/icons/square-minus'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const SquareMinus = createComponent({
  tagName: getScopedTagName('gds-icon-square-minus'),
  elementClass: IconSquareMinus,
  react: React
})
