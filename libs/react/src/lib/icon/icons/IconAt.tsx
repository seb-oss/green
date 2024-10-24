import React from 'react'
import { createComponent } from '@lit/react'

import { IconAt as Icon } from '@sebgroup/green-core/components/icon/icons/at.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconAt = createComponent({
  tagName: getScopedTagName('gds-icon-at'),
  elementClass: Icon,
  react: React,
})
