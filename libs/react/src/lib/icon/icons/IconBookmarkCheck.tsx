import React from 'react'
import { createComponent } from '@lit/react'
import { IconBookmarkCheck as Icon } from '@sebgroup/green-core/components/icon/icons/bookmark-check.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBookmarkCheck = createComponent({
  tagName: getScopedTagName('gds-icon-bookmark-check'),
  elementClass: Icon,
  react: React,
})
