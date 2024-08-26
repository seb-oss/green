import React from 'react'
import { createComponent } from '@lit/react'
import { IconBubbleAnnotation } from '@sebgroup/green-core/components/icon/icons/bubble-annotation'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const BubbleAnnotation = createComponent({
  tagName: getScopedTagName('gds-icon-bubble-annotation'),
  elementClass: IconBubbleAnnotation,
  react: React
})
