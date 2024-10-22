import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowBoxRight as Icon } from '@sebgroup/green-core/components/icon/icons/arrow-box-right.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconArrowBoxRight = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-box-right'),
  elementClass: Icon,
  react: React,
})
