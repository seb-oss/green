import React from 'react'
import { createComponent } from '@lit/react'

import { IconSquareX as Icon } from '@sebgroup/green-core/components/icon/icons/square-x.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconSquareX = createComponent({
  tagName: getScopedTagName('gds-icon-square-x'),
  elementClass: Icon,
  react: React,
})
