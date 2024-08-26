import React from 'react'
import { createComponent } from '@lit/react'
import { IconBubbleQuestion } from '@sebgroup/green-core/components/icon/icons/bubble-question'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const BubbleQuestion = createComponent({
  tagName: getScopedTagName('gds-icon-bubble-question'),
  elementClass: IconBubbleQuestion,
  react: React
})
