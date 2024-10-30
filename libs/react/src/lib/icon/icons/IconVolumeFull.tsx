import React from 'react'
import { createComponent } from '@lit/react'

import { IconVolumeFull as Icon } from '@sebgroup/green-core/components/icon/icons/volume-full.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconVolumeFull = createComponent({
  tagName: getScopedTagName('gds-icon-volume-full'),
  elementClass: Icon,
  react: React,
})
