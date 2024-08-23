import React from 'react'
import { createComponent } from '@lit/react'
import { IconArrow } from '@sebgroup/green-core/components/icon/icons/arrow'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Arrow = createComponent({
  tagName: getScopedTagName('gds-icon-arrow'),
  elementClass: IconArrow,
  react: React
})
