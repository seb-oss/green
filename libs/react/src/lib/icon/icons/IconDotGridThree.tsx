import React from 'react'
import { createComponent } from '@lit/react'
import { IconDotGridThree as Icon } from '@sebgroup/green-core/components/icon/icons/dot-grid-three.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconDotGridThree = createComponent({
  tagName: getScopedTagName('gds-icon-dot-grid-three'),
  elementClass: Icon,
  react: React,
})
