import React from 'react'
import { createComponent } from '@lit/react'
import { IconBatteryLoading } from '@sebgroup/green-core/components/icon/icons/battery-loading'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const BatteryLoading = createComponent({
  tagName: getScopedTagName('gds-icon-battery-loading'),
  elementClass: IconBatteryLoading,
  react: React
})
