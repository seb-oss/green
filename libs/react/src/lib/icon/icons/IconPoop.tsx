import React from 'react'
import { createComponent } from '@lit/react'

import { IconPoop as Icon } from '@sebgroup/green-core/components/icon/icons/poop.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconPoop = createComponent({
  tagName: getScopedTagName('gds-icon-poop'),
  elementClass: Icon,
  react: React,
})
