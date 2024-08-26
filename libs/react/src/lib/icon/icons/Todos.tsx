import React from 'react'
import { createComponent } from '@lit/react'
import { IconTodos } from '@sebgroup/green-core/components/icon/icons/todos'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Todos = createComponent({
  tagName: getScopedTagName('gds-icon-todos'),
  elementClass: IconTodos,
  react: React
})
