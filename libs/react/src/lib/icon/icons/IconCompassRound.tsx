import React from 'react'
import { createComponent } from '@lit/react'

import { IconCompassRound as Icon } from '@sebgroup/green-core/components/icon/icons/compass-round.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconCompassRound = createComponent({
  tagName: getScopedTagName('gds-icon-compass-round'),
  elementClass: Icon,
  react: React,
})
