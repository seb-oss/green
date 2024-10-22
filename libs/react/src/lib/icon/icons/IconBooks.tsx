import React from 'react'
import { createComponent } from '@lit/react'
import { IconBooks as Icon } from '@sebgroup/green-core/components/icon/icons/books.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconBooks = createComponent({
  tagName: getScopedTagName('gds-icon-books'),
  elementClass: Icon,
  react: React,
})
