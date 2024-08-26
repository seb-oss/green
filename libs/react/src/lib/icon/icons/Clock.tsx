import React from 'react'
import { createComponent } from '@lit/react'
import { IconClock } from '@sebgroup/green-core/components/icon/icons/clock'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Clock = createComponent({
  tagName: getScopedTagName('gds-icon-clock'),
  elementClass: IconClock,
  react: React
})
