import React from 'react'
import { createComponent } from '@lit/react'
import { IconThumbsDown } from '@sebgroup/green-core/components/icon/icons/thumbs-down'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ThumbsDown = createComponent({
  tagName: getScopedTagName('gds-icon-thumbs-down'),
  elementClass: IconThumbsDown,
  react: React
})
