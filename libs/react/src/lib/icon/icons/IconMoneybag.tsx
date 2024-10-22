import React from 'react'
import { createComponent } from '@lit/react'

import { IconMoneybag as Icon } from '@sebgroup/green-core/components/icon/icons/moneybag.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconMoneybag = createComponent({
  tagName: getScopedTagName('gds-icon-moneybag'),
  elementClass: Icon,
  react: React,
})
