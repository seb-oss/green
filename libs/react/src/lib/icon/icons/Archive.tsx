import React from 'react'
import { createComponent } from '@lit/react'
import { IconArchive } from '@sebgroup/green-core/components/icon/icons/archive'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Archive = createComponent({
  tagName: getScopedTagName('gds-icon-archive'),
  elementClass: IconArchive,
  react: React
})
