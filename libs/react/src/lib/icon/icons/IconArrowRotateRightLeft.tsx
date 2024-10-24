import React from 'react'
import { createComponent } from '@lit/react'

import { IconArrowRotateRightLeft as Icon } from '@sebgroup/green-core/components/icon/icons/arrow-rotate-right-left.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconArrowRotateRightLeft = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-rotate-right-left'),
  elementClass: Icon,
  react: React,
})
