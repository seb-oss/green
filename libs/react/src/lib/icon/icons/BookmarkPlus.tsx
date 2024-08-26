import React from 'react'
import { createComponent } from '@lit/react'
import { IconBookmarkPlus } from '@sebgroup/green-core/components/icon/icons/bookmark-plus'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const BookmarkPlus = createComponent({
  tagName: getScopedTagName('gds-icon-bookmark-plus'),
  elementClass: IconBookmarkPlus,
  react: React
})
