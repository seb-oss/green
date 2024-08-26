import React from 'react'
import { createComponent } from '@lit/react'
import { IconDirection } from '@sebgroup/green-core/components/icon/icons/direction'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Direction = createComponent({
  tagName: getScopedTagName('gds-icon-direction'),
  elementClass: IconDirection,
  react: React
})
