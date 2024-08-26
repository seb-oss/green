import React from 'react'
import { createComponent } from '@lit/react'
import { IconBooks } from '@sebgroup/green-core/components/icon/icons/books'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Books = createComponent({
  tagName: getScopedTagName('gds-icon-books'),
  elementClass: IconBooks,
  react: React
})
