import React from 'react'
import { createComponent } from '@lit/react'
import { IconTennis } from '@sebgroup/green-core/components/icon/icons/tennis'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Tennis = createComponent({
  tagName: getScopedTagName('gds-icon-tennis'),
  elementClass: IconTennis,
  react: React
})
