import React from 'react'
import { createComponent } from '@lit/react'

import { IconChevronLeft as Icon } from '@sebgroup/green-core/components/icon/icons/chevron-left.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconChevronLeft = createComponent({
  tagName: getScopedTagName('gds-icon-chevron-left'),
  elementClass: Icon,
  react: React,
})
