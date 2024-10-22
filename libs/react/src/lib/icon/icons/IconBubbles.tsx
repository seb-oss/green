import React from 'react'
import { createComponent } from '@lit/react'

import { IconBubbles as Icon } from '@sebgroup/green-core/components/icon/icons/bubbles.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBubbles = createComponent({
  tagName: getScopedTagName('gds-icon-bubbles'),
  elementClass: Icon,
  react: React,
})
