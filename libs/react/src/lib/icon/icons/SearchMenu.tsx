import React from 'react'
import { createComponent } from '@lit/react'
import { IconSearchMenu } from '@sebgroup/green-core/components/icon/icons/search-menu'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const SearchMenu = createComponent({
  tagName: getScopedTagName('gds-icon-search-menu'),
  elementClass: IconSearchMenu,
  react: React
})
