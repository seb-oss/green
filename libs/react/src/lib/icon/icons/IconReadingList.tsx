import React from 'react'
import { createComponent } from '@lit/react'

import { IconReadingList as Icon } from '@sebgroup/green-core/components/icon/icons/reading-list.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconReadingList = createComponent({
  tagName: getScopedTagName('gds-icon-reading-list'),
  elementClass: Icon,
  react: React,
})
