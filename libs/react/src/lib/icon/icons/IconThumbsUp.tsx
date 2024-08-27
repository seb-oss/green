import React from 'react'
import { createComponent } from '@lit/react'
import { IconThumbsUp as Icon } from '@sebgroup/green-core/components/icon/icons/thumbs-up'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconThumbsUp = createComponent({
  tagName: getScopedTagName('gds-icon-thumbs-up'),
  elementClass: Icon,
  react: React
})
