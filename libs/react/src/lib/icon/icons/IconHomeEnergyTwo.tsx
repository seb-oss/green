import React from 'react'
import { createComponent } from '@lit/react'
import { IconHomeEnergyTwo as Icon } from '@sebgroup/green-core/components/icon/icons/home-energy-two.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconHomeEnergyTwo = createComponent({
  tagName: getScopedTagName('gds-icon-home-energy-two'),
  elementClass: Icon,
  react: React,
})
