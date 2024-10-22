import React from 'react'
import { createComponent } from '@lit/react'

import { IconBubbleQuestion as Icon } from '@sebgroup/green-core/components/icon/icons/bubble-question.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBubbleQuestion = createComponent({
  tagName: getScopedTagName('gds-icon-bubble-question'),
  elementClass: Icon,
  react: React,
})
