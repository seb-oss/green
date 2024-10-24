import React from 'react'
import { createComponent } from '@lit/react'

import { IconBrandChrome as Icon } from '@sebgroup/green-core/components/icon/icons/brand-chrome.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBrandChrome = createComponent({
  tagName: getScopedTagName('gds-icon-brand-chrome'),
  elementClass: Icon,
  react: React,
})
