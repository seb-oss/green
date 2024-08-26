import React from 'react'
import { createComponent } from '@lit/react'
import { IconFashion } from '@sebgroup/green-core/components/icon/icons/fashion'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Fashion = createComponent({
  tagName: getScopedTagName('gds-icon-fashion'),
  elementClass: IconFashion,
  react: React
})
