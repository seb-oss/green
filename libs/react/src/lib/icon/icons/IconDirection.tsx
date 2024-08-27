import React from 'react'
import { createComponent } from '@lit/react'
import { IconDirection as Icon } from '@sebgroup/green-core/components/icon/icons/direction'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconDirection = createComponent({
  tagName: getScopedTagName('gds-icon-direction'),
  elementClass: Icon,
  react: React
})
