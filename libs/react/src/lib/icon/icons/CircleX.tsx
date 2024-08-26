import React from 'react'
import { createComponent } from '@lit/react'
import { IconCircleX } from '@sebgroup/green-core/components/icon/icons/circle-x'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const CircleX = createComponent({
  tagName: getScopedTagName('gds-icon-circle-x'),
  elementClass: IconCircleX,
  react: React
})
