import React from 'react'
import { createComponent } from '@lit/react'
import { getScopedTagName } from '@sebgroup/green-core/scoping'
import { GdsCard } from '@sebgroup/green-core/components/layout/card/index.js'

const Card = createComponent({
  tagName: getScopedTagName('gds-card'),
  elementClass: GdsCard,
  react: React
})

export default Card
