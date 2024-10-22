import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowLeftRight as Icon } from '@sebgroup/green-core/components/icon/icons/arrow-left-right.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconArrowLeftRight = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-left-right'),
  elementClass: Icon,
  react: React,
})
