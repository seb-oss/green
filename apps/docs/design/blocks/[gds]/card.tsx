import React from 'react'
import { createComponent } from '@lit/react'

import { GdsCard } from '@sebgroup/green-core/component/card/card.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Card = createComponent({
  tagName: getScopedTagName('gds-card'),
  elementClass: GdsCard,
  react: React,
})
