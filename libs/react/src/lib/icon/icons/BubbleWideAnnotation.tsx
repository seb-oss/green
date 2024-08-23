import React from 'react'
import { createComponent } from '@lit/react'
import { IconBubbleWideAnnotation } from '@sebgroup/green-core/components/icon/icons/bubble-wide-annotation'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const BubbleWideAnnotation = createComponent({
  tagName: getScopedTagName('gds-icon-bubble-wide-annotation'),
  elementClass: IconBubbleWideAnnotation,
  react: React
})
