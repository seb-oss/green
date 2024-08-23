import React from 'react'
import { createComponent } from '@lit/react'
import { IconLock } from '@sebgroup/green-core/components/icon/icons/lock'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Lock = createComponent({
  tagName: getScopedTagName('gds-icon-lock'),
  elementClass: IconLock,
  react: React
})
