import React from 'react'
import { createComponent } from '@lit/react'

import { IconBubbleText as Icon } from '@sebgroup/green-core/components/icon/icons/bubble-text.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBubbleText = createComponent({
  tagName: getScopedTagName('gds-icon-bubble-text'),
  elementClass: Icon,
  react: React,
})
