import React from 'react'
import { createComponent } from '@lit/react'

import { IconHomeRoof as Icon } from '@sebgroup/green-core/components/icon/icons/home-roof.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconHomeRoof = createComponent({
  tagName: getScopedTagName('gds-icon-home-roof'),
  elementClass: Icon,
  react: React,
})
