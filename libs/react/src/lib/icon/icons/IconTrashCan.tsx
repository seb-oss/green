import React from 'react'
import { createComponent } from '@lit/react'

import { IconTrashCan as Icon } from '@sebgroup/green-core/components/icon/icons/trash-can.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconTrashCan = createComponent({
  tagName: getScopedTagName('gds-icon-trash-can'),
  elementClass: Icon,
  react: React,
})
