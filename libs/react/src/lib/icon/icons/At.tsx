import React from 'react'
import { createComponent } from '@lit/react'
import { IconAt } from '@sebgroup/green-core/components/icon/icons/at'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const At = createComponent({
  tagName: getScopedTagName('gds-icon-at'),
  elementClass: IconAt,
  react: React
})
