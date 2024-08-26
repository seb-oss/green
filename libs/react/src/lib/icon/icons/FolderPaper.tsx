import React from 'react'
import { createComponent } from '@lit/react'
import { IconFolderPaper } from '@sebgroup/green-core/components/icon/icons/folder-paper'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const FolderPaper = createComponent({
  tagName: getScopedTagName('gds-icon-folder-paper'),
  elementClass: IconFolderPaper,
  react: React
})
