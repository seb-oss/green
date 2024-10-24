import React from 'react'
import { createComponent } from '@lit/react'

import { IconShare as Icon } from '@sebgroup/green-core/components/icon/icons/share.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconShare = createComponent({
  tagName: getScopedTagName('gds-icon-share'),
  elementClass: Icon,
  react: React,
})
