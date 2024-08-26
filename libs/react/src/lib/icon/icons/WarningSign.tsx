import React from 'react'
import { createComponent } from '@lit/react'
import { IconWarningSign } from '@sebgroup/green-core/components/icon/icons/warning-sign'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const WarningSign = createComponent({
  tagName: getScopedTagName('gds-icon-warning-sign'),
  elementClass: IconWarningSign,
  react: React
})
