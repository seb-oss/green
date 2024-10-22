import React from 'react'
import { createComponent } from '@lit/react'

import { IconImages as Icon } from '@sebgroup/green-core/components/icon/icons/images.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconImages = createComponent({
  tagName: getScopedTagName('gds-icon-images'),
  elementClass: Icon,
  react: React,
})
