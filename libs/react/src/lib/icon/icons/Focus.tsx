import React from 'react'
import { createComponent } from '@lit/react'
import { IconFocus } from '@sebgroup/green-core/components/icon/icons/focus'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Focus = createComponent({
  tagName: getScopedTagName('gds-icon-focus'),
  elementClass: IconFocus,
  react: React
})
