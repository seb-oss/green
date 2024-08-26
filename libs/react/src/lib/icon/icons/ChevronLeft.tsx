import React from 'react'
import { createComponent } from '@lit/react'
import { IconChevronLeft } from '@sebgroup/green-core/components/icon/icons/chevron-left'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ChevronLeft = createComponent({
  tagName: getScopedTagName('gds-icon-chevron-left'),
  elementClass: IconChevronLeft,
  react: React
})
