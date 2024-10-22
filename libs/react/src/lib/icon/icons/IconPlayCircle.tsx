import React from 'react'
import { createComponent } from '@lit/react'

import { IconPlayCircle as Icon } from '@sebgroup/green-core/components/icon/icons/play-circle.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconPlayCircle = createComponent({
  tagName: getScopedTagName('gds-icon-play-circle'),
  elementClass: Icon,
  react: React,
})
