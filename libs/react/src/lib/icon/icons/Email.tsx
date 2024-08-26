import React from 'react'
import { createComponent } from '@lit/react'
import { IconEmail } from '@sebgroup/green-core/components/icon/icons/email'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Email = createComponent({
  tagName: getScopedTagName('gds-icon-email'),
  elementClass: IconEmail,
  react: React
})
