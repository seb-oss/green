import React from 'react'
import { createComponent } from '@lit/react'
import { IconGrowth as Icon } from '@sebgroup/green-core/components/icon/icons/growth.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconGrowth = createComponent({
  tagName: getScopedTagName('gds-icon-growth'),
  elementClass: Icon,
  react: React,
})
