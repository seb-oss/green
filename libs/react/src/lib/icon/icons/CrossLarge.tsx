import React from 'react'
import { createComponent } from '@lit/react'
import { IconCrossLarge } from '@sebgroup/green-core/components/icon/icons/cross-large'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const CrossLarge = createComponent({
  tagName: getScopedTagName('gds-icon-cross-large'),
  elementClass: IconCrossLarge,
  react: React
})
