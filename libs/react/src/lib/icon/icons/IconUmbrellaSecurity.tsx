import React from 'react'
import { createComponent } from '@lit/react'

import { IconUmbrellaSecurity as Icon } from '@sebgroup/green-core/components/icon/icons/umbrella-security.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconUmbrellaSecurity = createComponent({
  tagName: getScopedTagName('gds-icon-umbrella-security'),
  elementClass: Icon,
  react: React,
})
