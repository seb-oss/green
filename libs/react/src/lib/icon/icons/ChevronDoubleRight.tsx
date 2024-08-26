import React from 'react'
import { createComponent } from '@lit/react'
import { IconChevronDoubleRight } from '@sebgroup/green-core/components/icon/icons/chevron-double-right'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ChevronDoubleRight = createComponent({
  tagName: getScopedTagName('gds-icon-chevron-double-right'),
  elementClass: IconChevronDoubleRight,
  react: React
})
