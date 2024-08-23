import React from 'react'
import { createComponent } from '@lit/react'
import { IconCircleInfo } from '@sebgroup/green-core/components/icon/icons/circle-info'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const CircleInfo = createComponent({
  tagName: getScopedTagName('gds-icon-circle-info'),
  elementClass: IconCircleInfo,
  react: React
})
