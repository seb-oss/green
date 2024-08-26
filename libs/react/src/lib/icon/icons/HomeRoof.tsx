import React from 'react'
import { createComponent } from '@lit/react'
import { IconHomeRoof } from '@sebgroup/green-core/components/icon/icons/home-roof'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const HomeRoof = createComponent({
  tagName: getScopedTagName('gds-icon-home-roof'),
  elementClass: IconHomeRoof,
  react: React
})
