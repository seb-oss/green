import React from 'react'
import { createComponent } from '@lit/react'
import { IconBookmark } from '@sebgroup/green-core/components/icon/icons/bookmark'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Bookmark = createComponent({
  tagName: getScopedTagName('gds-icon-bookmark'),
  elementClass: IconBookmark,
  react: React
})
