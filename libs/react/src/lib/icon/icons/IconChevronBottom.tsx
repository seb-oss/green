import React from 'react'
import { createComponent } from '@lit/react'

import { IconChevronBottom as Icon } from '@sebgroup/green-core/components/icon/icons/chevron-bottom.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconChevronBottom = createComponent({
  tagName: getScopedTagName('gds-icon-chevron-bottom'),
  elementClass: Icon,
  react: React,
})
