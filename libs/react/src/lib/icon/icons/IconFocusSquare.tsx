import React from 'react'
import { createComponent } from '@lit/react'

import { IconFocusSquare as Icon } from '@sebgroup/green-core/components/icon/icons/focus-square.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconFocusSquare = createComponent({
  tagName: getScopedTagName('gds-icon-focus-square'),
  elementClass: Icon,
  react: React,
})
