import React from 'react'
import { createComponent } from '@lit/react'
import { IconFolderPaper as Icon } from '@sebgroup/green-core/components/icon/icons/folder-paper.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconFolderPaper = createComponent({
  tagName: getScopedTagName('gds-icon-folder-paper'),
  elementClass: Icon,
  react: React,
})
