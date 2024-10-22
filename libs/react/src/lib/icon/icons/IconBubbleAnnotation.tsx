import React from 'react'
import { createComponent } from '@lit/react'
import { IconBubbleAnnotation as Icon } from '@sebgroup/green-core/components/icon/icons/bubble-annotation.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBubbleAnnotation = createComponent({
  tagName: getScopedTagName('gds-icon-bubble-annotation'),
  elementClass: Icon,
  react: React,
})
