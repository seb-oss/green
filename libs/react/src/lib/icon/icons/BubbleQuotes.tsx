import React from 'react'
import { createComponent } from '@lit/react'
import { IconBubbleQuotes } from '@sebgroup/green-core/components/icon/icons/bubble-quotes'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const BubbleQuotes = createComponent({
  tagName: getScopedTagName('gds-icon-bubble-quotes'),
  elementClass: IconBubbleQuotes,
  react: React
})
