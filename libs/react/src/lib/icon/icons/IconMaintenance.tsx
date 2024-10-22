import React from 'react'
import { createComponent } from '@lit/react'

import { IconMaintenance as Icon } from '@sebgroup/green-core/components/icon/icons/maintenance.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconMaintenance = createComponent({
  tagName: getScopedTagName('gds-icon-maintenance'),
  elementClass: Icon,
  react: React,
})
