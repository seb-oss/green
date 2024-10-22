import React from 'react'
import { createComponent } from '@lit/react'

import { IconFolder as Icon } from '@sebgroup/green-core/components/icon/icons/folder.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconFolder = createComponent({
  tagName: getScopedTagName('gds-icon-folder'),
  elementClass: Icon,
  react: React,
})
