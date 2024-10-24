import React from 'react'
import { createComponent } from '@lit/react'

import { IconPause as Icon } from '@sebgroup/green-core/components/icon/icons/pause.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconPause = createComponent({
  tagName: getScopedTagName('gds-icon-pause'),
  elementClass: Icon,
  react: React,
})
