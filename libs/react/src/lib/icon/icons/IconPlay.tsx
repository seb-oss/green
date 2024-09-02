import React from 'react'
import { createComponent } from '@lit/react'
import { IconPlay as Icon } from '@sebgroup/green-core/components/icon/icons/play'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconPlay = createComponent({
  tagName: getScopedTagName('gds-icon-play'),
  elementClass: Icon,
  react: React
})
