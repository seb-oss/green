import React from 'react'
import { createComponent } from '@lit/react'

import { IconPhone as Icon } from '@sebgroup/green-core/components/icon/icons/phone.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconPhone = createComponent({
  tagName: getScopedTagName('gds-icon-phone'),
  elementClass: Icon,
  react: React,
})
