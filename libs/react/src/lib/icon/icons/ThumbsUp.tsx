import React from 'react'
import { createComponent } from '@lit/react'
import { IconThumbsUp } from '@sebgroup/green-core/components/icon/icons/thumbs-up'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ThumbsUp = createComponent({
  tagName: getScopedTagName('gds-icon-thumbs-up'),
  elementClass: IconThumbsUp,
  react: React
})
