import React from 'react'
import { createComponent } from '@lit/react'
import { IconCirclePlus } from '@sebgroup/green-core/components/icon/icons/circle-plus'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const CirclePlus = createComponent({
  tagName: getScopedTagName('gds-icon-circle-plus'),
  elementClass: IconCirclePlus,
  react: React
})
