import React from 'react'
import { createComponent } from '@lit/react'
import { IconSun } from '@sebgroup/green-core/components/icon/icons/sun'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Sun = createComponent({
  tagName: getScopedTagName('gds-icon-sun'),
  elementClass: IconSun,
  react: React
})
