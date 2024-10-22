import React from 'react'
import { createComponent } from '@lit/react'
import { IconBookmarkRemove as Icon } from '@sebgroup/green-core/components/icon/icons/bookmark-remove.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBookmarkRemove = createComponent({
  tagName: getScopedTagName('gds-icon-bookmark-remove'),
  elementClass: Icon,
  react: React,
})
