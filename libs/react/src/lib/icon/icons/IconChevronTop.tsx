import React from 'react'
import { createComponent } from '@lit/react'

import { IconChevronTop as Icon } from '@sebgroup/green-core/components/icon/icons/chevron-top.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconChevronTop = createComponent({
  tagName: getScopedTagName('gds-icon-chevron-top'),
  elementClass: Icon,
  react: React,
})
