import React from 'react'
import { createComponent } from '@lit/react'
import { IconBatteryLoading as Icon } from '@sebgroup/green-core/components/icon/icons/battery-loading'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBatteryLoading = createComponent({
  tagName: getScopedTagName('gds-icon-battery-loading'),
  elementClass: Icon,
  react: React
})
