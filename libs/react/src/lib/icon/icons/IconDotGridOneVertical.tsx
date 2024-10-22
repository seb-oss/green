import React from 'react'
import { createComponent } from '@lit/react'
import { IconDotGridOneVertical as Icon } from '@sebgroup/green-core/components/icon/icons/dot-grid-one-vertical.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconDotGridOneVertical = createComponent({
  tagName: getScopedTagName('gds-icon-dot-grid-one-vertical'),
  elementClass: Icon,
  react: React,
})
