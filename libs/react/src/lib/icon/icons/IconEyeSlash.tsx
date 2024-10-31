import React from 'react'
import { createComponent } from '@lit/react'

import { IconEyeSlash as Icon } from '@sebgroup/green-core/components/icon/icons/eye-slash.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconEyeSlash = createComponent({
  tagName: getScopedTagName('gds-icon-eye-slash'),
  elementClass: Icon,
  react: React,
})
