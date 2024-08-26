import React from 'react'
import { createComponent } from '@lit/react'
import { IconLinkedin } from '@sebgroup/green-core/components/icon/icons/linkedin'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Linkedin = createComponent({
  tagName: getScopedTagName('gds-icon-linkedin'),
  elementClass: IconLinkedin,
  react: React
})
