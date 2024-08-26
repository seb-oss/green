import React from 'react'
import { createComponent } from '@lit/react'
import { IconSettingsSliderHor } from '@sebgroup/green-core/components/icon/icons/settings-slider-hor'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const SettingsSliderHor = createComponent({
  tagName: getScopedTagName('gds-icon-settings-slider-hor'),
  elementClass: IconSettingsSliderHor,
  react: React
})
