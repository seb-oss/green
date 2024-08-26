import React from 'react'
import { createComponent } from '@lit/react'
import { IconTelevision } from '@sebgroup/green-core/components/icon/icons/television'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Television = createComponent({
  tagName: getScopedTagName('gds-icon-television'),
  elementClass: IconTelevision,
  react: React
})
