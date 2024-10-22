import React from 'react'
import { createComponent } from '@lit/react'

import { IconArrowRightUpCircle as Icon } from '@sebgroup/green-core/components/icon/icons/arrow-right-up-circle.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconArrowRightUpCircle = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-right-up-circle'),
  elementClass: Icon,
  react: React,
})
