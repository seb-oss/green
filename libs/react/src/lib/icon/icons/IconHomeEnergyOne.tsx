import React from 'react'
import { createComponent } from '@lit/react'
import { IconHomeEnergyOne as Icon } from '@sebgroup/green-core/components/icon/icons/home-energy-one.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconHomeEnergyOne = createComponent({
  tagName: getScopedTagName('gds-icon-home-energy-one'),
  elementClass: Icon,
  react: React,
})
