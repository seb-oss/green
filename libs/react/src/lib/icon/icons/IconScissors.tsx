import React from 'react'
import { createComponent } from '@lit/react'
import { IconScissors as Icon } from '@sebgroup/green-core/components/icon/icons/scissors.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconScissors = createComponent({
  tagName: getScopedTagName('gds-icon-scissors'),
  elementClass: Icon,
  react: React,
})
