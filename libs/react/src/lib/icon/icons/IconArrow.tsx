import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrow as Icon } from '@sebgroup/green-core/components/icon/icons/arrow.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconArrow = createComponent({
  tagName: getScopedTagName('gds-icon-arrow'),
  elementClass: Icon,
  react: React,
})
