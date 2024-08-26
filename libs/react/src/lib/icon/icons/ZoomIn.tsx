import React from 'react'
import { createComponent } from '@lit/react'
import { IconZoomIn } from '@sebgroup/green-core/components/icon/icons/zoom-in'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ZoomIn = createComponent({
  tagName: getScopedTagName('gds-icon-zoom-in'),
  elementClass: IconZoomIn,
  react: React
})
