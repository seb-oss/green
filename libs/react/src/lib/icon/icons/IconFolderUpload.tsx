import React from 'react'
import { createComponent } from '@lit/react'
import { IconFolderUpload as Icon } from '@sebgroup/green-core/components/icon/icons/folder-upload.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconFolderUpload = createComponent({
  tagName: getScopedTagName('gds-icon-folder-upload'),
  elementClass: Icon,
  react: React,
})
