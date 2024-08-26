import React from 'react'
import { createComponent } from '@lit/react'
import { IconReadingList } from '@sebgroup/green-core/components/icon/icons/reading-list'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ReadingList = createComponent({
  tagName: getScopedTagName('gds-icon-reading-list'),
  elementClass: IconReadingList,
  react: React
})
