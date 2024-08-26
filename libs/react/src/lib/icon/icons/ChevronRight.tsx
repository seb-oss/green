import React from 'react'
import { createComponent } from '@lit/react'
import { IconChevronRight } from '@sebgroup/green-core/components/icon/icons/chevron-right'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ChevronRight = createComponent({
  tagName: getScopedTagName('gds-icon-chevron-right'),
  elementClass: IconChevronRight,
  react: React
})
