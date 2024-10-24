import React from 'react'
import { createComponent } from '@lit/react'

import { IconFilter as Icon } from '@sebgroup/green-core/components/icon/icons/filter.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconFilter = createComponent({
  tagName: getScopedTagName('gds-icon-filter'),
  elementClass: Icon,
  react: React,
})
