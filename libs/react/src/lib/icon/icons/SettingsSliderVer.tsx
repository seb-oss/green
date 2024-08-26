import React from 'react'
import { createComponent } from '@lit/react'
import { IconSettingsSliderVer } from '@sebgroup/green-core/components/icon/icons/settings-slider-ver'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const SettingsSliderVer = createComponent({
  tagName: getScopedTagName('gds-icon-settings-slider-ver'),
  elementClass: IconSettingsSliderVer,
  react: React
})
