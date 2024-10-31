import React from 'react'
import { createComponent } from '@lit/react'

import { IconHistory as Icon } from '@sebgroup/green-core/components/icon/icons/history.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconHistory = createComponent({
  tagName: getScopedTagName('gds-icon-history'),
  elementClass: Icon,
  react: React,
})
