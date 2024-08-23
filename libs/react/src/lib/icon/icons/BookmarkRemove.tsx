import React from 'react'
import { createComponent } from '@lit/react'
import { IconBookmarkRemove } from '@sebgroup/green-core/components/icon/icons/bookmark-remove'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const BookmarkRemove = createComponent({
  tagName: getScopedTagName('gds-icon-bookmark-remove'),
  elementClass: IconBookmarkRemove,
  react: React
})
