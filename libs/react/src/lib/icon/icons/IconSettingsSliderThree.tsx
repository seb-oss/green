import React from 'react'
import { createComponent } from '@lit/react'
import { IconSettingsSliderThree as Icon } from '@sebgroup/green-core/components/icon/icons/settings-slider-three.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconSettingsSliderThree = createComponent({
  tagName: getScopedTagName('gds-icon-settings-slider-three'),
  elementClass: Icon,
  react: React,
})
