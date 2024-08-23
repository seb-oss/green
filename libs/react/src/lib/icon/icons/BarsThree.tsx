import React from 'react'
import { createComponent } from '@lit/react'
import { IconBarsThree } from '@sebgroup/green-core/components/icon/icons/bars-three'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const BarsThree = createComponent({
  tagName: getScopedTagName('gds-icon-bars-three'),
  elementClass: IconBarsThree,
  react: React
})
