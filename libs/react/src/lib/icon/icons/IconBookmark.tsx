import React from 'react'
import { createComponent } from '@lit/react'

import { IconBookmark as Icon } from '@sebgroup/green-core/components/icon/icons/bookmark.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBookmark = createComponent({
  tagName: getScopedTagName('gds-icon-bookmark'),
  elementClass: Icon,
  react: React,
})
