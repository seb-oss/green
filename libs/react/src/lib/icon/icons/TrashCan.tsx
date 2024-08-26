import React from 'react'
import { createComponent } from '@lit/react'
import { IconTrashCan } from '@sebgroup/green-core/components/icon/icons/trash-can'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const TrashCan = createComponent({
  tagName: getScopedTagName('gds-icon-trash-can'),
  elementClass: IconTrashCan,
  react: React
})
