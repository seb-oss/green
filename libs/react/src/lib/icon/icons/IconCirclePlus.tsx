import React from 'react'
import { createComponent } from '@lit/react'

import { IconCirclePlus as Icon } from '@sebgroup/green-core/components/icon/icons/circle-plus.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconCirclePlus = createComponent({
  tagName: getScopedTagName('gds-icon-circle-plus'),
  elementClass: Icon,
  react: React,
})
