import React from 'react'
import { createComponent } from '@lit/react'
import { IconLinkedin as Icon } from '@sebgroup/green-core/components/icon/icons/linkedin.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconLinkedin = createComponent({
  tagName: getScopedTagName('gds-icon-linkedin'),
  elementClass: Icon,
  react: React
})
