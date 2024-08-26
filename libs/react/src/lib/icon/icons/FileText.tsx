import React from 'react'
import { createComponent } from '@lit/react'
import { IconFileText } from '@sebgroup/green-core/components/icon/icons/file-text'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const FileText = createComponent({
  tagName: getScopedTagName('gds-icon-file-text'),
  elementClass: IconFileText,
  react: React
})
