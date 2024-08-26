import React from 'react'
import { createComponent } from '@lit/react'
import { IconLaw } from '@sebgroup/green-core/components/icon/icons/law'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Law = createComponent({
  tagName: getScopedTagName('gds-icon-law'),
  elementClass: IconLaw,
  react: React
})
