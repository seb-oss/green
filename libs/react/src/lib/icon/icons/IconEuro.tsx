import React from 'react'
import { createComponent } from '@lit/react'

import { IconEuro as Icon } from '@sebgroup/green-core/components/icon/icons/euro.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconEuro = createComponent({
  tagName: getScopedTagName('gds-icon-euro'),
  elementClass: Icon,
  react: React,
})
