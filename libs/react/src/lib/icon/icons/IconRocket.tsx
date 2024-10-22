import React from 'react'
import { createComponent } from '@lit/react'

import { IconRocket as Icon } from '@sebgroup/green-core/components/icon/icons/rocket.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconRocket = createComponent({
  tagName: getScopedTagName('gds-icon-rocket'),
  elementClass: Icon,
  react: React,
})
