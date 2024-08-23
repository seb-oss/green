import React from 'react'
import { createComponent } from '@lit/react'
import { IconStore } from '@sebgroup/green-core/components/icon/icons/store'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Store = createComponent({
  tagName: getScopedTagName('gds-icon-store'),
  elementClass: IconStore,
  react: React
})
