import React from 'react'
import { createComponent } from '@lit/react'
import { IconBrush } from '@sebgroup/green-core/components/icon/icons/brush'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Brush = createComponent({
  tagName: getScopedTagName('gds-icon-brush'),
  elementClass: IconBrush,
  react: React
})
