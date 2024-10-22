import React from 'react'
import { createComponent } from '@lit/react'

import { IconZoomOut as Icon } from '@sebgroup/green-core/components/icon/icons/zoom-out.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconZoomOut = createComponent({
  tagName: getScopedTagName('gds-icon-zoom-out'),
  elementClass: Icon,
  react: React,
})
