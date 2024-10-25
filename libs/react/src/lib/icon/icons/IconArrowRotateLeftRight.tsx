import React from 'react'
import { createComponent } from '@lit/react'

import { IconArrowRotateLeftRight as Icon } from '@sebgroup/green-core/components/icon/icons/arrow-rotate-left-right.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconArrowRotateLeftRight = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-rotate-left-right'),
  elementClass: Icon,
  react: React,
})
