import React from 'react'
import { createComponent } from '@lit/react'
import { IconSolarPanel as Icon } from '@sebgroup/green-core/components/icon/icons/solar-panel.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconSolarPanel = createComponent({
  tagName: getScopedTagName('gds-icon-solar-panel'),
  elementClass: Icon,
  react: React,
})
