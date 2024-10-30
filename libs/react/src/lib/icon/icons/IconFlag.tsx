import React from 'react'
import { createComponent } from '@lit/react'

import { IconFlag as Icon } from '@sebgroup/green-core/components/icon/icons/flag.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconFlag = createComponent({
  tagName: getScopedTagName('gds-icon-flag'),
  elementClass: Icon,
  react: React,
})
