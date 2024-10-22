import React from 'react'
import { createComponent } from '@lit/react'
import { IconBubbleDots as Icon } from '@sebgroup/green-core/components/icon/icons/bubble-dots.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBubbleDots = createComponent({
  tagName: getScopedTagName('gds-icon-bubble-dots'),
  elementClass: Icon,
  react: React,
})
