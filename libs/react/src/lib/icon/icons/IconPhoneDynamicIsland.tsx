import React from 'react'
import { createComponent } from '@lit/react'

import { IconPhoneDynamicIsland as Icon } from '@sebgroup/green-core/components/icon/icons/phone-dynamic-island.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconPhoneDynamicIsland = createComponent({
  tagName: getScopedTagName('gds-icon-phone-dynamic-island'),
  elementClass: Icon,
  react: React,
})
