import React from 'react'
import { createComponent } from '@lit/react'

import { IconVolumeHalf as Icon } from '@sebgroup/green-core/components/icon/icons/volume-half.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconVolumeHalf = createComponent({
  tagName: getScopedTagName('gds-icon-volume-half'),
  elementClass: Icon,
  react: React,
})
