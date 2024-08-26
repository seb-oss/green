import React from 'react'
import { createComponent } from '@lit/react'
import { IconSquareInfo } from '@sebgroup/green-core/components/icon/icons/square-info'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const SquareInfo = createComponent({
  tagName: getScopedTagName('gds-icon-square-info'),
  elementClass: IconSquareInfo,
  react: React
})
