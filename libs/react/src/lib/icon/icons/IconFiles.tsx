import React from 'react'
import { createComponent } from '@lit/react'
import { IconFiles as Icon } from '@sebgroup/green-core/components/icon/icons/files.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconFiles = createComponent({
  tagName: getScopedTagName('gds-icon-files'),
  elementClass: Icon,
  react: React,
})
