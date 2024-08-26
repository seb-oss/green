import React from 'react'
import { createComponent } from '@lit/react'
import { IconHomeEnergyOne } from '@sebgroup/green-core/components/icon/icons/home-energy-one'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const HomeEnergyOne = createComponent({
  tagName: getScopedTagName('gds-icon-home-energy-one'),
  elementClass: IconHomeEnergyOne,
  react: React
})
