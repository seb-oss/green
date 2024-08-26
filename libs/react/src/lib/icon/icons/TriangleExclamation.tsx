import React from 'react'
import { createComponent } from '@lit/react'
import { IconTriangleExclamation } from '@sebgroup/green-core/components/icon/icons/triangle-exclamation'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const TriangleExclamation = createComponent({
  tagName: getScopedTagName('gds-icon-triangle-exclamation'),
  elementClass: IconTriangleExclamation,
  react: React
})
