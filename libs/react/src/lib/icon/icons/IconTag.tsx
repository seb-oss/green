import React from 'react'
import { createComponent } from '@lit/react'

import { IconTag as Icon } from '@sebgroup/green-core/components/icon/icons/tag.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconTag = createComponent({
  tagName: getScopedTagName('gds-icon-tag'),
  elementClass: Icon,
  react: React,
})
