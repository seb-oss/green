import React from 'react'
import { createComponent } from '@lit/react'

import { GdsIcon } from '@sebgroup/green-core/component/icon/icon.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Icon = createComponent({
  tagName: getScopedTagName('gds-icon'),
  elementClass: GdsIcon,
  react: React,
})
