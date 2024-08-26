import React from 'react'
import { createComponent } from '@lit/react'
import { IconRainy } from '@sebgroup/green-core/components/icon/icons/rainy'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Rainy = createComponent({
  tagName: getScopedTagName('gds-icon-rainy'),
  elementClass: IconRainy,
  react: React
})
