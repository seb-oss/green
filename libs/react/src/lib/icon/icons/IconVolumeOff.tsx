import React from 'react'
import { createComponent } from '@lit/react'
import { IconVolumeOff as Icon } from '@sebgroup/green-core/components/icon/icons/volume-off.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconVolumeOff = createComponent({
  tagName: getScopedTagName('gds-icon-volume-off'),
  elementClass: Icon,
  react: React,
})
