import React from 'react'
import { createComponent } from '@lit/react'

import { IconUnlocked as Icon } from '@sebgroup/green-core/components/icon/icons/unlocked.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconUnlocked = createComponent({
  tagName: getScopedTagName('gds-icon-unlocked'),
  elementClass: Icon,
  react: React,
})
