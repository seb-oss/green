import React from 'react'
import { createComponent } from '@lit/react'
import { IconFolderUpload } from '@sebgroup/green-core/components/icon/icons/folder-upload'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const FolderUpload = createComponent({
  tagName: getScopedTagName('gds-icon-folder-upload'),
  elementClass: IconFolderUpload,
  react: React
})
