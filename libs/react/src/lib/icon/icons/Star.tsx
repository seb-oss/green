import React from 'react'
import { createComponent } from '@lit/react'
import { IconStar } from '@sebgroup/green-core/components/icon/icons/star'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Star = createComponent({
  tagName: getScopedTagName('gds-icon-star'),
  elementClass: IconStar,
  react: React
})
