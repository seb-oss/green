import React from 'react'
import { createComponent } from '@lit/react'
import { IconBookmarkCheck } from '@sebgroup/green-core/components/icon/icons/bookmark-check'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const BookmarkCheck = createComponent({
  tagName: getScopedTagName('gds-icon-bookmark-check'),
  elementClass: IconBookmarkCheck,
  react: React
})
