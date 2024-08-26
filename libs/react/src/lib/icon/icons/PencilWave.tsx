import React from 'react'
import { createComponent } from '@lit/react'
import { IconPencilWave } from '@sebgroup/green-core/components/icon/icons/pencil-wave'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const PencilWave = createComponent({
  tagName: getScopedTagName('gds-icon-pencil-wave'),
  elementClass: IconPencilWave,
  react: React
})
