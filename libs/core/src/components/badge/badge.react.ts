import { createComponent } from '@lit-labs/react'
import * as React from 'react'
import { GdsBadge } from './badge'

export const BadgeReact = createComponent({
  tagName: 'gds-badge',
  elementClass: GdsBadge,
  react: React,
})
