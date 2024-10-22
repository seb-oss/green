import React from 'react'
import { createComponent } from '@lit/react'
import { IconTodos as Icon } from '@sebgroup/green-core/components/icon/icons/todos.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconTodos = createComponent({
  tagName: getScopedTagName('gds-icon-todos'),
  elementClass: Icon,
  react: React,
})
