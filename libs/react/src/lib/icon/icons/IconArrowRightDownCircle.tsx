import React from 'react'
import { createComponent } from '@lit/react'

import { IconArrowRightDownCircle as Icon } from '@sebgroup/green-core/components/icon/icons/arrow-right-down-circle.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconArrowRightDownCircle = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-right-down-circle'),
  elementClass: Icon,
  react: React,
})
