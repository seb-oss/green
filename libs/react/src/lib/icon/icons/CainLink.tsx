import React from 'react'
import { createComponent } from '@lit/react'
import { IconCainLink } from '@sebgroup/green-core/components/icon/icons/cain-link'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const CainLink = createComponent({
  tagName: getScopedTagName('gds-icon-cain-link'),
  elementClass: IconCainLink,
  react: React
})
