import React from 'react'
import { createComponent } from '@lit/react'

import { IconTennis as Icon } from '@sebgroup/green-core/components/icon/icons/tennis.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconTennis = createComponent({
  tagName: getScopedTagName('gds-icon-tennis'),
  elementClass: Icon,
  react: React,
})
