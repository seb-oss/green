import React from 'react'
import { createComponent } from '@lit/react'

import { IconGlobus as Icon } from '@sebgroup/green-core/components/icon/icons/globus.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconGlobus = createComponent({
  tagName: getScopedTagName('gds-icon-globus'),
  elementClass: Icon,
  react: React,
})
