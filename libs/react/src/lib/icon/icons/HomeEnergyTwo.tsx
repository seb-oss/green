import React from 'react'
import { createComponent } from '@lit/react'
import { IconHomeEnergyTwo } from '@sebgroup/green-core/components/icon/icons/home-energy-two'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const HomeEnergyTwo = createComponent({
  tagName: getScopedTagName('gds-icon-home-energy-two'),
  elementClass: IconHomeEnergyTwo,
  react: React
})
