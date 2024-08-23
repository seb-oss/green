import React from 'react'
import { createComponent } from '@lit/react'
import { IconDotGridOneVertical } from '@sebgroup/green-core/components/icon/icons/dot-grid-one-vertical'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const DotGridOneVertical = createComponent({
  tagName: getScopedTagName('gds-icon-dot-grid-one-vertical'),
  elementClass: IconDotGridOneVertical,
  react: React
})
