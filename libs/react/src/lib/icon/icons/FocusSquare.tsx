import React from 'react'
import { createComponent } from '@lit/react'
import { IconFocusSquare } from '@sebgroup/green-core/components/icon/icons/focus-square'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const FocusSquare = createComponent({
  tagName: getScopedTagName('gds-icon-focus-square'),
  elementClass: IconFocusSquare,
  react: React
})
