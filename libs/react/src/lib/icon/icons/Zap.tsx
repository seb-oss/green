import React from 'react'
import { createComponent } from '@lit/react'
import { IconZap } from '@sebgroup/green-core/components/icon/icons/zap'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Zap = createComponent({
  tagName: getScopedTagName('gds-icon-zap'),
  elementClass: IconZap,
  react: React
})
