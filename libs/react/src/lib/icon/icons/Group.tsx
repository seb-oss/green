import React from 'react'
import { createComponent } from '@lit/react'
import { IconGroup } from '@sebgroup/green-core/components/icon/icons/group'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Group = createComponent({
  tagName: getScopedTagName('gds-icon-group'),
  elementClass: IconGroup,
  react: React
})
