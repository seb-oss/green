import React from 'react'
import { createComponent } from '@lit/react'
import { IconFiles } from '@sebgroup/green-core/components/icon/icons/files'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Files = createComponent({
  tagName: getScopedTagName('gds-icon-files'),
  elementClass: IconFiles,
  react: React
})
