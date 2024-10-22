import React from 'react'
import { createComponent } from '@lit/react'

import { IconZoomIn as Icon } from '@sebgroup/green-core/components/icon/icons/zoom-in.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconZoomIn = createComponent({
  tagName: getScopedTagName('gds-icon-zoom-in'),
  elementClass: Icon,
  react: React,
})
