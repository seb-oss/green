import React from 'react'
import { createComponent } from '@lit/react'

import { IconArrowRight as Icon } from '@sebgroup/green-core/components/icon/icons/arrow-right.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconArrowRight = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-right'),
  elementClass: Icon,
  react: React,
})
