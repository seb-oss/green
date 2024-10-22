import React from 'react'
import { createComponent } from '@lit/react'
import { IconFastForward as Icon } from '@sebgroup/green-core/components/icon/icons/fast-forward.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconFastForward = createComponent({
  tagName: getScopedTagName('gds-icon-fast-forward'),
  elementClass: Icon,
  react: React,
})
