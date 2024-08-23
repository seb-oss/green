import React from 'react'
import { createComponent } from '@lit/react'
import { IconBubbleDots } from '@sebgroup/green-core/components/icon/icons/bubble-dots'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const BubbleDots = createComponent({
  tagName: getScopedTagName('gds-icon-bubble-dots'),
  elementClass: IconBubbleDots,
  react: React
})
