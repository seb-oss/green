import React from 'react'
import { createComponent } from '@lit/react'
import { IconFlag } from '@sebgroup/green-core/components/icon/icons/flag'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Flag = createComponent({
  tagName: getScopedTagName('gds-icon-flag'),
  elementClass: IconFlag,
  react: React
})
