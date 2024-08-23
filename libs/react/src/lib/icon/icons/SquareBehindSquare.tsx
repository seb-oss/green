import React from 'react'
import { createComponent } from '@lit/react'
import { IconSquareBehindSquare } from '@sebgroup/green-core/components/icon/icons/square-behind-square'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const SquareBehindSquare = createComponent({
  tagName: getScopedTagName('gds-icon-square-behind-square'),
  elementClass: IconSquareBehindSquare,
  react: React
})
