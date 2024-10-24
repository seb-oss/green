import React from 'react'
import { createComponent } from '@lit/react'

import { IconTelevision as Icon } from '@sebgroup/green-core/components/icon/icons/television.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconTelevision = createComponent({
  tagName: getScopedTagName('gds-icon-television'),
  elementClass: Icon,
  react: React,
})
