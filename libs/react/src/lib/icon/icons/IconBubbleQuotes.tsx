import React from 'react'
import { createComponent } from '@lit/react'
import { IconBubbleQuotes as Icon } from '@sebgroup/green-core/components/icon/icons/bubble-quotes.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBubbleQuotes = createComponent({
  tagName: getScopedTagName('gds-icon-bubble-quotes'),
  elementClass: Icon,
  react: React,
})
