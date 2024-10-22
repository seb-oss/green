import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrowBoxLeft as Icon } from '@sebgroup/green-core/components/icon/icons/arrow-box-left.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconArrowBoxLeft = createComponent({
  tagName: getScopedTagName('gds-icon-arrow-box-left'),
  elementClass: Icon,
  react: React,
})
