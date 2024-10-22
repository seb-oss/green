import React from 'react'
import { createComponent } from '@lit/react'

import { IconWarningSign as Icon } from '@sebgroup/green-core/components/icon/icons/warning-sign.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconWarningSign = createComponent({
  tagName: getScopedTagName('gds-icon-warning-sign'),
  elementClass: Icon,
  react: React,
})
