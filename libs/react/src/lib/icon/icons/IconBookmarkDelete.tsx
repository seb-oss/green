import React from 'react'
import { createComponent } from '@lit/react'

import { IconBookmarkDelete as Icon } from '@sebgroup/green-core/components/icon/icons/bookmark-delete.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBookmarkDelete = createComponent({
  tagName: getScopedTagName('gds-icon-bookmark-delete'),
  elementClass: Icon,
  react: React,
})
