import React from 'react'
import { createComponent } from '@lit/react'

import { IconArrowRightCircle as Icon } from '@sebgroup/green-core/components/icon/icons/arrow-right-circle.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconArrowRightCircle = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-right-circle'),
  elementClass: Icon,
  react: React,
})
