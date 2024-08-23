import React from 'react'
import { createComponent } from '@lit/react'
import { IconLightning } from '@sebgroup/green-core/components/icon/icons/lightning'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Lightning = createComponent({
  tagName: getScopedTagName('gds-icon-lightning'),
  elementClass: IconLightning,
  react: React
})
