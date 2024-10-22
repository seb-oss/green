import React from 'react'
import { createComponent } from '@lit/react'

import { IconCirclePlaceholderOn as Icon } from '@sebgroup/green-core/components/icon/icons/circle-placeholder-on.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconCirclePlaceholderOn = createComponent({
  tagName: getScopedTagName('gds-icon-circle-placeholder-on'),
  elementClass: Icon,
  react: React,
})
