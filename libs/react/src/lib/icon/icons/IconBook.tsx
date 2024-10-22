import React from 'react'
import { createComponent } from '@lit/react'
import { IconBook as Icon } from '@sebgroup/green-core/components/icon/icons/book.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBook = createComponent({
  tagName: getScopedTagName('gds-icon-book'),
  elementClass: Icon,
  react: React,
})
