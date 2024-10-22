import React from 'react'
import { createComponent } from '@lit/react'
import { IconBubbleWideAnnotation as Icon } from '@sebgroup/green-core/components/icon/icons/bubble-wide-annotation.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBubbleWideAnnotation = createComponent({
  tagName: getScopedTagName('gds-icon-bubble-wide-annotation'),
  elementClass: Icon,
  react: React,
})
