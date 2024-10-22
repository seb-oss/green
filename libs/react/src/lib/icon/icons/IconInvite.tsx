import React from 'react'
import { createComponent } from '@lit/react'

import { IconInvite as Icon } from '@sebgroup/green-core/components/icon/icons/invite.js'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const IconInvite = createComponent({
  tagName: getScopedTagName('gds-icon-invite'),
  elementClass: Icon,
  react: React,
})
