import React from 'react'
import { createComponent } from '@lit/react'
import { IconInstagram } from '@sebgroup/green-core/components/icon/icons/instagram'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Instagram = createComponent({
  tagName: getScopedTagName('gds-icon-instagram'),
  elementClass: IconInstagram,
  react: React
})
