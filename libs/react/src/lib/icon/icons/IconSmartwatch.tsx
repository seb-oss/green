import React from 'react'
import { createComponent } from '@lit/react'
import { IconSmartwatch as Icon } from '@sebgroup/green-core/components/icon/icons/smartwatch.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconSmartwatch = createComponent({
  tagName: getScopedTagName('gds-icon-smartwatch'),
  elementClass: Icon,
  react: React,
})
