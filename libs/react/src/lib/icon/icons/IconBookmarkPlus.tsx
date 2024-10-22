import React from 'react'
import { createComponent } from '@lit/react'
import { IconBookmarkPlus as Icon } from '@sebgroup/green-core/components/icon/icons/bookmark-plus.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBookmarkPlus = createComponent({
  tagName: getScopedTagName('gds-icon-bookmark-plus'),
  elementClass: Icon,
  react: React,
})
