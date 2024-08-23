import React from 'react'
import { createComponent } from '@lit/react'
import { IconFolder } from '@sebgroup/green-core/components/icon/icons/folder'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Folder = createComponent({
  tagName: getScopedTagName('gds-icon-folder'),
  elementClass: IconFolder,
  react: React
})
