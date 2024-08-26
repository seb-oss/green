import React from 'react'
import { createComponent } from '@lit/react'
import { IconChevronDoubleDown } from '@sebgroup/green-core/components/icon/icons/chevron-double-down'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ChevronDoubleDown = createComponent({
  tagName: getScopedTagName('gds-icon-chevron-double-down'),
  elementClass: IconChevronDoubleDown,
  react: React
})
