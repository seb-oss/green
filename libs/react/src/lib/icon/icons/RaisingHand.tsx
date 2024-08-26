import React from 'react'
import { createComponent } from '@lit/react'
import { IconRaisingHand } from '@sebgroup/green-core/components/icon/icons/raising-hand'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const RaisingHand = createComponent({
  tagName: getScopedTagName('gds-icon-raising-hand'),
  elementClass: IconRaisingHand,
  react: React
})
