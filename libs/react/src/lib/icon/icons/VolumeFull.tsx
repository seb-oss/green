import React from 'react'
import { createComponent } from '@lit/react'
import { IconVolumeFull } from '@sebgroup/green-core/components/icon/icons/volume-full'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const VolumeFull = createComponent({
  tagName: getScopedTagName('gds-icon-volume-full'),
  elementClass: IconVolumeFull,
  react: React
})
