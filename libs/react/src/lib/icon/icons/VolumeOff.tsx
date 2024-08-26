import React from 'react'
import { createComponent } from '@lit/react'
import { IconVolumeOff } from '@sebgroup/green-core/components/icon/icons/volume-off'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const VolumeOff = createComponent({
  tagName: getScopedTagName('gds-icon-volume-off'),
  elementClass: IconVolumeOff,
  react: React
})
