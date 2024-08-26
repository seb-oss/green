import React from 'react'
import { createComponent } from '@lit/react'
import { IconZoomOut } from '@sebgroup/green-core/components/icon/icons/zoom-out'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ZoomOut = createComponent({
  tagName: getScopedTagName('gds-icon-zoom-out'),
  elementClass: IconZoomOut,
  react: React
})
