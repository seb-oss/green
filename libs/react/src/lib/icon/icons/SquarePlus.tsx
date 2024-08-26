import React from 'react'
import { createComponent } from '@lit/react'
import { IconSquarePlus } from '@sebgroup/green-core/components/icon/icons/square-plus'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const SquarePlus = createComponent({
  tagName: getScopedTagName('gds-icon-square-plus'),
  elementClass: IconSquarePlus,
  react: React
})
