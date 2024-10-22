import React from 'react'
import { createComponent } from '@lit/react'
import { IconSettingsSliderVer as Icon } from '@sebgroup/green-core/components/icon/icons/settings-slider-ver.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconSettingsSliderVer = createComponent({
  tagName: getScopedTagName('gds-icon-settings-slider-ver'),
  elementClass: Icon,
  react: React,
})
