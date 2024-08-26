import React from 'react'
import { createComponent } from '@lit/react'
import { IconChevronTop } from '@sebgroup/green-core/components/icon/icons/chevron-top'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const ChevronTop = createComponent({
  tagName: getScopedTagName('gds-icon-chevron-top'),
  elementClass: IconChevronTop,
  react: React
})
