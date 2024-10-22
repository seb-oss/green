import React from 'react'
import { createComponent } from '@lit/react'
import { IconChevronRight as Icon } from '@sebgroup/green-core/components/icon/icons/chevron-right.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconChevronRight = createComponent({
  tagName: getScopedTagName('gds-icon-chevron-right'),
  elementClass: Icon,
  react: React,
})
