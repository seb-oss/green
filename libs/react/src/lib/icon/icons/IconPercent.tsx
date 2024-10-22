import React from 'react'
import { createComponent } from '@lit/react'
import { IconPercent as Icon } from '@sebgroup/green-core/components/icon/icons/percent.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconPercent = createComponent({
  tagName: getScopedTagName('gds-icon-percent'),
  elementClass: Icon,
  react: React,
})
