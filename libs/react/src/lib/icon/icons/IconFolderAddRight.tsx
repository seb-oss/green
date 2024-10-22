import React from 'react'
import { createComponent } from '@lit/react'
import { IconFolderAddRight as Icon } from '@sebgroup/green-core/components/icon/icons/folder-add-right.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconFolderAddRight = createComponent({
  tagName: getScopedTagName('gds-icon-folder-add-right'),
  elementClass: Icon,
  react: React,
})
