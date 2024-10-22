import React from 'react'
import { createComponent } from '@lit/react'

import { IconZap as Icon } from '@sebgroup/green-core/components/icon/icons/zap.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconZap = createComponent({
  tagName: getScopedTagName('gds-icon-zap'),
  elementClass: Icon,
  react: React,
})
