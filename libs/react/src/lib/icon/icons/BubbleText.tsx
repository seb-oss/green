import React from 'react'
import { createComponent } from '@lit/react'
import { IconBubbleText } from '@sebgroup/green-core/components/icon/icons/bubble-text'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const BubbleText = createComponent({
  tagName: getScopedTagName('gds-icon-bubble-text'),
  elementClass: IconBubbleText,
  react: React
})
