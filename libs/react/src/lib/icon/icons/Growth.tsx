import React from 'react'
import { createComponent } from '@lit/react'
import { IconGrowth } from '@sebgroup/green-core/components/icon/icons/growth'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Growth = createComponent({
  tagName: getScopedTagName('gds-icon-growth'),
  elementClass: IconGrowth,
  react: React
})
