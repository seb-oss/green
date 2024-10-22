import React from 'react'
import { createComponent } from '@lit/react'
import { IconSolar as Icon } from '@sebgroup/green-core/components/icon/icons/solar.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconSolar = createComponent({
  tagName: getScopedTagName('gds-icon-solar'),
  elementClass: Icon,
  react: React,
})
