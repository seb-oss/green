import React from 'react'
import { createComponent } from '@lit/react'
import { IconSettingsSliderHor as Icon } from '@sebgroup/green-core/components/icon/icons/settings-slider-hor.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconSettingsSliderHor = createComponent({
  tagName: getScopedTagName('gds-icon-settings-slider-hor'),
  elementClass: Icon,
  react: React,
})
