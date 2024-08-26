import React from 'react'
import { createComponent } from '@lit/react'
import { IconMaintenance } from '@sebgroup/green-core/components/icon/icons/maintenance'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Maintenance = createComponent({
  tagName: getScopedTagName('gds-icon-maintenance'),
  elementClass: IconMaintenance,
  react: React
})
