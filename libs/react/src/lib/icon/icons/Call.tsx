import React from 'react'
import { createComponent } from '@lit/react'
import { IconCall } from '@sebgroup/green-core/components/icon/icons/call'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Call = createComponent({
  tagName: getScopedTagName('gds-icon-call'),
  elementClass: IconCall,
  react: React
})
