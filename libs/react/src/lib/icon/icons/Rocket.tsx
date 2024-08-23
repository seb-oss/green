import React from 'react'
import { createComponent } from '@lit/react'
import { IconRocket } from '@sebgroup/green-core/components/icon/icons/rocket'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Rocket = createComponent({
  tagName: getScopedTagName('gds-icon-rocket'),
  elementClass: IconRocket,
  react: React
})
