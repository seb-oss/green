import React from 'react'
import { createComponent } from '@lit/react'

import { IconLightning as Icon } from '@sebgroup/green-core/components/icon/icons/lightning.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconLightning = createComponent({
  tagName: getScopedTagName('gds-icon-lightning'),
  elementClass: Icon,
  react: React,
})
