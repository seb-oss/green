import React from 'react'
import { createComponent } from '@lit/react'

import { IconGroup as Icon } from '@sebgroup/green-core/components/icon/icons/group.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconGroup = createComponent({
  tagName: getScopedTagName('gds-icon-group'),
  elementClass: Icon,
  react: React,
})
