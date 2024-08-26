import React from 'react'
import { createComponent } from '@lit/react'
import { IconDotGridThree } from '@sebgroup/green-core/components/icon/icons/dot-grid-three'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const DotGridThree = createComponent({
  tagName: getScopedTagName('gds-icon-dot-grid-three'),
  elementClass: IconDotGridThree,
  react: React
})
