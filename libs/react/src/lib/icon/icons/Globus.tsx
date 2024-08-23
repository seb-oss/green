import React from 'react'
import { createComponent } from '@lit/react'
import { IconGlobus } from '@sebgroup/green-core/components/icon/icons/globus'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Globus = createComponent({
  tagName: getScopedTagName('gds-icon-globus'),
  elementClass: IconGlobus,
  react: React
})
