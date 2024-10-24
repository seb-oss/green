import React from 'react'
import { createComponent } from '@lit/react'

import { IconPencilWave as Icon } from '@sebgroup/green-core/components/icon/icons/pencil-wave.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconPencilWave = createComponent({
  tagName: getScopedTagName('gds-icon-pencil-wave'),
  elementClass: Icon,
  react: React,
})
