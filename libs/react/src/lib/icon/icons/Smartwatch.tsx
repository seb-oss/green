import React from 'react'
import { createComponent } from '@lit/react'
import { IconSmartwatch } from '@sebgroup/green-core/components/icon/icons/smartwatch'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Smartwatch = createComponent({
  tagName: getScopedTagName('gds-icon-smartwatch'),
  elementClass: IconSmartwatch,
  react: React
})
