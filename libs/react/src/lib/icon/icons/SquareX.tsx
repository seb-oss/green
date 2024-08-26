import React from 'react'
import { createComponent } from '@lit/react'
import { IconSquareX } from '@sebgroup/green-core/components/icon/icons/square-x'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const SquareX = createComponent({
  tagName: getScopedTagName('gds-icon-square-x'),
  elementClass: IconSquareX,
  react: React
})
