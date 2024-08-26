import React from 'react'
import { createComponent } from '@lit/react'
import { IconMacbookAir } from '@sebgroup/green-core/components/icon/icons/macbook-air'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const MacbookAir = createComponent({
  tagName: getScopedTagName('gds-icon-macbook-air'),
  elementClass: IconMacbookAir,
  react: React
})
