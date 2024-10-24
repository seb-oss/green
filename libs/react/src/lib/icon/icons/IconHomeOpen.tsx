import React from 'react'
import { createComponent } from '@lit/react'

import { IconHomeOpen as Icon } from '@sebgroup/green-core/components/icon/icons/home-open.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconHomeOpen = createComponent({
  tagName: getScopedTagName('gds-icon-home-open'),
  elementClass: Icon,
  react: React,
})
