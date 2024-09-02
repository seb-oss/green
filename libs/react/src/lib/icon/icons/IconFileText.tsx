import React from 'react'
import { createComponent } from '@lit/react'
import { IconFileText as Icon } from '@sebgroup/green-core/components/icon/icons/file-text'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconFileText = createComponent({
  tagName: getScopedTagName('gds-icon-file-text'),
  elementClass: Icon,
  react: React
})
