import React from 'react'
import { createComponent } from '@lit/react'

import { IconClock as Icon } from '@sebgroup/green-core/components/icon/icons/clock.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconClock = createComponent({
  tagName: getScopedTagName('gds-icon-clock'),
  elementClass: Icon,
  react: React,
})
