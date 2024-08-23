import React from 'react'
import { createComponent } from '@lit/react'
import { IconBell } from '@sebgroup/green-core/components/icon/icons/bell'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Bell = createComponent({
  tagName: getScopedTagName('gds-icon-bell'),
  elementClass: IconBell,
  react: React
})
