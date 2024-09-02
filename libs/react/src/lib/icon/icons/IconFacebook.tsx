import React from 'react'
import { createComponent } from '@lit/react'
import { IconFacebook as Icon } from '@sebgroup/green-core/components/icon/icons/facebook'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconFacebook = createComponent({
  tagName: getScopedTagName('gds-icon-facebook'),
  elementClass: Icon,
  react: React
})
