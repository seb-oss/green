import React from 'react'
import { createComponent } from '@lit/react'
import { IconSeb } from '@sebgroup/green-core/components/icon/icons/seb'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Seb = createComponent({
  tagName: getScopedTagName('gds-icon-seb'),
  elementClass: IconSeb,
  react: React
})
