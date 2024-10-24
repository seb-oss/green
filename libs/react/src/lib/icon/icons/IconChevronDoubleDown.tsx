import React from 'react'
import { createComponent } from '@lit/react'

import { IconChevronDoubleDown as Icon } from '@sebgroup/green-core/components/icon/icons/chevron-double-down.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconChevronDoubleDown = createComponent({
  tagName: getScopedTagName('gds-icon-chevron-double-down'),
  elementClass: Icon,
  react: React,
})
