import React from 'react'
import { createComponent } from '@lit/react'
import { IconSquareGridCircle } from '@sebgroup/green-core/components/icon/icons/square-grid-circle'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const SquareGridCircle = createComponent({
  tagName: getScopedTagName('gds-icon-square-grid-circle'),
  elementClass: IconSquareGridCircle,
  react: React
})
