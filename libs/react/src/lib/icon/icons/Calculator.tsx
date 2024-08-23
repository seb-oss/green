import React from 'react'
import { createComponent } from '@lit/react'
import { IconCalculator } from '@sebgroup/green-core/components/icon/icons/calculator'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Calculator = createComponent({
  tagName: getScopedTagName('gds-icon-calculator'),
  elementClass: IconCalculator,
  react: React
})
