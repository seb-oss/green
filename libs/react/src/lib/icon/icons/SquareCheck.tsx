import React from 'react'
import { createComponent } from '@lit/react'
import { IconSquareCheck } from '@sebgroup/green-core/components/icon/icons/square-check'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const SquareCheck = createComponent({
  tagName: getScopedTagName('gds-icon-square-check'),
  elementClass: IconSquareCheck,
  react: React
})
