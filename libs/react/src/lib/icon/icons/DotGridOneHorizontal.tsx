import React from 'react'
import { createComponent } from '@lit/react'
import { IconDotGridOneHorizontal } from '@sebgroup/green-core/components/icon/icons/dot-grid-one-horizontal'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const DotGridOneHorizontal = createComponent({
  tagName: getScopedTagName('gds-icon-dot-grid-one-horizontal'),
  elementClass: IconDotGridOneHorizontal,
  react: React
})
