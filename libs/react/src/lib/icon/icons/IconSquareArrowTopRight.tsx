import React from 'react'
import { createComponent } from '@lit/react'

import { IconSquareArrowTopRight as Icon } from '@sebgroup/green-core/components/icon/icons/square-arrow-top-right.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconSquareArrowTopRight = createComponent({
  tagName: getScopedTagName('gds-icon-square-arrow-top-right'),
  elementClass: Icon,
  react: React,
})
