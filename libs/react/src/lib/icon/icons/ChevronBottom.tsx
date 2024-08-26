import React from 'react'
import { createComponent } from '@lit/react'
import { IconChevronBottom } from '@sebgroup/green-core/components/icon/icons/chevron-bottom'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ChevronBottom = createComponent({
  tagName: getScopedTagName('gds-icon-chevron-bottom'),
  elementClass: IconChevronBottom,
  react: React
})
