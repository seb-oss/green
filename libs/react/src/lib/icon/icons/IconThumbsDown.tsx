import React from 'react'
import { createComponent } from '@lit/react'
import { IconThumbsDown as Icon } from '@sebgroup/green-core/components/icon/icons/thumbs-down.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconThumbsDown = createComponent({
  tagName: getScopedTagName('gds-icon-thumbs-down'),
  elementClass: Icon,
  react: React,
})
