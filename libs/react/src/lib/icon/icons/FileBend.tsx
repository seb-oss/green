import React from 'react'
import { createComponent } from '@lit/react'
import { IconFileBend } from '@sebgroup/green-core/components/icon/icons/file-bend'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const FileBend = createComponent({
  tagName: getScopedTagName('gds-icon-file-bend'),
  elementClass: IconFileBend,
  react: React
})
