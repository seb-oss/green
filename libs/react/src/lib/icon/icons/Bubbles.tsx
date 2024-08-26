import React from 'react'
import { createComponent } from '@lit/react'
import { IconBubbles } from '@sebgroup/green-core/components/icon/icons/bubbles'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Bubbles = createComponent({
  tagName: getScopedTagName('gds-icon-bubbles'),
  elementClass: IconBubbles,
  react: React
})
