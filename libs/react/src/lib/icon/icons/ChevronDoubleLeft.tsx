import React from 'react'
import { createComponent } from '@lit/react'
import { IconChevronDoubleLeft } from '@sebgroup/green-core/components/icon/icons/chevron-double-left'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ChevronDoubleLeft = createComponent({
  tagName: getScopedTagName('gds-icon-chevron-double-left'),
  elementClass: IconChevronDoubleLeft,
  react: React
})
