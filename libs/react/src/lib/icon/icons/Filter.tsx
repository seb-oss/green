import React from 'react'
import { createComponent } from '@lit/react'
import { IconFilter } from '@sebgroup/green-core/components/icon/icons/filter'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Filter = createComponent({
  tagName: getScopedTagName('gds-icon-filter'),
  elementClass: IconFilter,
  react: React
})
