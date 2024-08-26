import React from 'react'
import { createComponent } from '@lit/react'
import { IconBook } from '@sebgroup/green-core/components/icon/icons/book'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Book = createComponent({
  tagName: getScopedTagName('gds-icon-book'),
  elementClass: IconBook,
  react: React
})
