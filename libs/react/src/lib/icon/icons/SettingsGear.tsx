import React from 'react'
import { createComponent } from '@lit/react'
import { IconSettingsGear } from '@sebgroup/green-core/components/icon/icons/settings-gear'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const SettingsGear = createComponent({
  tagName: getScopedTagName('gds-icon-settings-gear'),
  elementClass: IconSettingsGear,
  react: React
})
