import React from 'react'
import { createComponent } from '@lit/react'
import { IconCircleCheck as Icon } from '@sebgroup/green-core/components/icon/icons/circle-check'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconCircleCheck = createComponent({
  tagName: getScopedTagName('gds-icon-circle-check'),
  elementClass: Icon,
  react: React
})
