import React from 'react'
import { createComponent } from '@lit/react'
import { IconChevronDoubleRight as Icon } from '@sebgroup/green-core/components/icon/icons/chevron-double-right'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconChevronDoubleRight = createComponent({
  tagName: getScopedTagName('gds-icon-chevron-double-right'),
  elementClass: Icon,
  react: React
})
