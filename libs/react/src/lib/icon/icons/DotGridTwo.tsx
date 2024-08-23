import React from 'react'
import { createComponent } from '@lit/react'
import { IconDotGridTwo } from '@sebgroup/green-core/components/icon/icons/dot-grid-two'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const DotGridTwo = createComponent({
  tagName: getScopedTagName('gds-icon-dot-grid-two'),
  elementClass: IconDotGridTwo,
  react: React
})
