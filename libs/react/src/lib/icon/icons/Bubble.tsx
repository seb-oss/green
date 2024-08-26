import React from 'react'
import { createComponent } from '@lit/react'
import { IconBubble } from '@sebgroup/green-core/components/icon/icons/bubble'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Bubble = createComponent({
  tagName: getScopedTagName('gds-icon-bubble'),
  elementClass: IconBubble,
  react: React
})
