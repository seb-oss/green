import React from 'react'
import { createComponent } from '@lit/react'
import { IconCrossSmall } from '@sebgroup/green-core/components/icon/icons/cross-small'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const CrossSmall = createComponent({
  tagName: getScopedTagName('gds-icon-cross-small'),
  elementClass: IconCrossSmall,
  react: React
})
