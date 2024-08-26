import React from 'react'
import { createComponent } from '@lit/react'
import { IconSettingsSliderThree } from '@sebgroup/green-core/components/icon/icons/settings-slider-three'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const SettingsSliderThree = createComponent({
  tagName: getScopedTagName('gds-icon-settings-slider-three'),
  elementClass: IconSettingsSliderThree,
  react: React
})
