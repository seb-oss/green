import React from 'react'
import { createComponent } from '@lit/react'

import { IconSearchMenu as Icon } from '@sebgroup/green-core/components/icon/icons/search-menu.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconSearchMenu = createComponent({
  tagName: getScopedTagName('gds-icon-search-menu'),
  elementClass: Icon,
  react: React,
})
