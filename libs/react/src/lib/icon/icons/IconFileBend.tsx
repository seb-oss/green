import React from 'react'
import { createComponent } from '@lit/react'

import { IconFileBend as Icon } from '@sebgroup/green-core/components/icon/icons/file-bend.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconFileBend = createComponent({
  tagName: getScopedTagName('gds-icon-file-bend'),
  elementClass: Icon,
  react: React,
})
