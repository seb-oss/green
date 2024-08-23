import React from 'react'
import { createComponent } from '@lit/react'
import { IconCompassRound } from '@sebgroup/green-core/components/icon/icons/compass-round'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const CompassRound = createComponent({
  tagName: getScopedTagName('gds-icon-compass-round'),
  elementClass: IconCompassRound,
  react: React
})
