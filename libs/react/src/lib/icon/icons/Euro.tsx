import React from 'react'
import { createComponent } from '@lit/react'
import { IconEuro } from '@sebgroup/green-core/components/icon/icons/euro'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Euro = createComponent({
  tagName: getScopedTagName('gds-icon-euro'),
  elementClass: IconEuro,
  react: React
})
