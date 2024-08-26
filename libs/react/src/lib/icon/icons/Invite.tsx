import React from 'react'
import { createComponent } from '@lit/react'
import { IconInvite } from '@sebgroup/green-core/components/icon/icons/invite'
import { getScopedTagName } from '@sebgroup/green-core/scoping'

export const Invite = createComponent({
  tagName: getScopedTagName('gds-icon-invite'),
  elementClass: IconInvite,
  react: React
})
