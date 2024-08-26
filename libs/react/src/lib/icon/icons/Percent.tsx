import React from 'react'
import { createComponent } from '@lit/react'
import { IconPercent } from '@sebgroup/green-core/components/icon/icons/percent'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Percent = createComponent({
  tagName: getScopedTagName('gds-icon-percent'),
  elementClass: IconPercent,
  react: React
})
