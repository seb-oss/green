import React from 'react'
import { createComponent } from '@lit/react'
import { IconHomeOpen } from '@sebgroup/green-core/components/icon/icons/home-open'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const HomeOpen = createComponent({
  tagName: getScopedTagName('gds-icon-home-open'),
  elementClass: IconHomeOpen,
  react: React
})
