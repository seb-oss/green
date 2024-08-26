import React from 'react'
import { createComponent } from '@lit/react'
import { IconVolumeHalf } from '@sebgroup/green-core/components/icon/icons/volume-half'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const VolumeHalf = createComponent({
  tagName: getScopedTagName('gds-icon-volume-half'),
  elementClass: IconVolumeHalf,
  react: React
})
