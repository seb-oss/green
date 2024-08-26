import React from 'react'
import { createComponent } from '@lit/react'
import { IconCircleCheck } from '@sebgroup/green-core/components/icon/icons/circle-check'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const CircleCheck = createComponent({
  tagName: getScopedTagName('gds-icon-circle-check'),
  elementClass: IconCircleCheck,
  react: React
})
