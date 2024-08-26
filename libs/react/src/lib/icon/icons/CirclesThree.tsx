import React from 'react'
import { createComponent } from '@lit/react'
import { IconCirclesThree } from '@sebgroup/green-core/components/icon/icons/circles-three'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const CirclesThree = createComponent({
  tagName: getScopedTagName('gds-icon-circles-three'),
  elementClass: IconCirclesThree,
  react: React
})
