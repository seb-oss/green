import React from 'react'
import { createComponent } from '@lit/react'

import { IconBlock as Icon } from '@sebgroup/green-core/components/icon/icons/block.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBlock = createComponent({
  tagName: getScopedTagName('gds-icon-block'),
  elementClass: Icon,
  react: React,
})
