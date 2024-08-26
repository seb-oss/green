import React from 'react'
import { createComponent } from '@lit/react'
import { IconSolar } from '@sebgroup/green-core/components/icon/icons/solar'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Solar = createComponent({
  tagName: getScopedTagName('gds-icon-solar'),
  elementClass: IconSolar,
  react: React
})
