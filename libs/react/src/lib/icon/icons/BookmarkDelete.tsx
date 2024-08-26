import React from 'react'
import { createComponent } from '@lit/react'
import { IconBookmarkDelete } from '@sebgroup/green-core/components/icon/icons/bookmark-delete'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const BookmarkDelete = createComponent({
  tagName: getScopedTagName('gds-icon-bookmark-delete'),
  elementClass: IconBookmarkDelete,
  react: React
})
