import React from 'react'
import { createComponent } from '@lit/react'
import { IconChevronDoubleUp } from '@sebgroup/green-core/components/icon/icons/chevron-double-up'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ChevronDoubleUp = createComponent({
  tagName: getScopedTagName('gds-icon-chevron-double-up'),
  elementClass: IconChevronDoubleUp,
  react: React
})
