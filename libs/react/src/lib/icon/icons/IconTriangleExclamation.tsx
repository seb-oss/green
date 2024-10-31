import React from 'react'
import { createComponent } from '@lit/react'

import { IconTriangleExclamation as Icon } from '@sebgroup/green-core/components/icon/icons/triangle-exclamation.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconTriangleExclamation = createComponent({
  tagName: getScopedTagName('gds-icon-triangle-exclamation'),
  elementClass: Icon,
  react: React,
})
