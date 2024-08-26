import React from 'react'
import { createComponent } from '@lit/react'
import { IconUnlocked } from '@sebgroup/green-core/components/icon/icons/unlocked'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Unlocked = createComponent({
  tagName: getScopedTagName('gds-icon-unlocked'),
  elementClass: IconUnlocked,
  react: React
})
