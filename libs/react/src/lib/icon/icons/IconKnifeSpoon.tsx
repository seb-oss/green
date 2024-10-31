import React from 'react'
import { createComponent } from '@lit/react'

import { IconKnifeSpoon as Icon } from '@sebgroup/green-core/components/icon/icons/knife-spoon.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconKnifeSpoon = createComponent({
  tagName: getScopedTagName('gds-icon-knife-spoon'),
  elementClass: Icon,
  react: React,
})
