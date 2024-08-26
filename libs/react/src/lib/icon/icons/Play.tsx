import React from 'react'
import { createComponent } from '@lit/react'
import { IconPlay } from '@sebgroup/green-core/components/icon/icons/play'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Play = createComponent({
  tagName: getScopedTagName('gds-icon-play'),
  elementClass: IconPlay,
  react: React
})
