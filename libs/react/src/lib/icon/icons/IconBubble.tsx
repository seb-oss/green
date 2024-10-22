import React from 'react'
import { createComponent } from '@lit/react'
import { IconBubble as Icon } from '@sebgroup/green-core/components/icon/icons/bubble.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBubble = createComponent({
  tagName: getScopedTagName('gds-icon-bubble'),
  elementClass: Icon,
  react: React,
})
