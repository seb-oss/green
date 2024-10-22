import React from 'react'
import { createComponent } from '@lit/react'
import { IconSettingsGear as Icon } from '@sebgroup/green-core/components/icon/icons/settings-gear.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconSettingsGear = createComponent({
  tagName: getScopedTagName('gds-icon-settings-gear'),
  elementClass: Icon,
  react: React,
})
