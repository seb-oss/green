import React from 'react'
import { createComponent } from '@lit/react'
import { IconScissors } from '@sebgroup/green-core/components/icon/icons/scissors'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Scissors = createComponent({
  tagName: getScopedTagName('gds-icon-scissors'),
  elementClass: IconScissors,
  react: React
})
