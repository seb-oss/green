import React from 'react'
import { createComponent } from '@lit/react'

import { IconEyeOpen as Icon } from '@sebgroup/green-core/components/icon/icons/eye-open.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconEyeOpen = createComponent({
  tagName: getScopedTagName('gds-icon-eye-open'),
  elementClass: Icon,
  react: React,
})
