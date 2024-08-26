import React from 'react'
import { createComponent } from '@lit/react'
import { IconFolderAddRight } from '@sebgroup/green-core/components/icon/icons/folder-add-right'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const FolderAddRight = createComponent({
  tagName: getScopedTagName('gds-icon-folder-add-right'),
  elementClass: IconFolderAddRight,
  react: React
})
