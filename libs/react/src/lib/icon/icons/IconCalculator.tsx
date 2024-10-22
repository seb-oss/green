import React from 'react'
import { createComponent } from '@lit/react'
import { IconCalculator as Icon } from '@sebgroup/green-core/components/icon/icons/calculator.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconCalculator = createComponent({
  tagName: getScopedTagName('gds-icon-calculator'),
  elementClass: Icon,
  react: React,
})
