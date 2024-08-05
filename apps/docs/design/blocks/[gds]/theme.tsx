import React from 'react'
import { createComponent } from '@lit/react'

import { GdsTheme } from '@sebgroup/green-core/component/theme/theme.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Theme = createComponent({
  tagName: getScopedTagName('gds-theme'),
  elementClass: GdsTheme,
  react: React,
})
