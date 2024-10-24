import React from 'react'
import { createComponent } from '@lit/react'

import { IconChevronDoubleUp as Icon } from '@sebgroup/green-core/components/icon/icons/chevron-double-up.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconChevronDoubleUp = createComponent({
  tagName: getScopedTagName('gds-icon-chevron-double-up'),
  elementClass: Icon,
  react: React,
})
