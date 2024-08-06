import React from 'react'
import { createComponent } from '@lit/react'
import { GdsTheme } from '@sebgroup/green-core/components/theme'

export const Theme = createComponent({
  tagName: 'gds-theme',
  elementClass: GdsTheme,
  react: React,
})
