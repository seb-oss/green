import React from 'react'
import { createComponent } from '@lit/react'
import { IconFacebook } from '@sebgroup/green-core/components/icon/icons/facebook'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Facebook = createComponent({
  tagName: getScopedTagName('gds-icon-facebook'),
  elementClass: IconFacebook,
  react: React
})
