import React from 'react'
import { createComponent } from '@lit/react'
import { IconFocus as Icon } from '@sebgroup/green-core/components/icon/icons/focus.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconFocus = createComponent({
  tagName: getScopedTagName('gds-icon-focus'),
  elementClass: Icon,
  react: React,
})
