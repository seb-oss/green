'use client'

import React from 'react'
import { GdsBadge } from '@sebgroup/green-react/core/badge'
import { IconPlusSmall } from '@sebgroup/green-react/src/lib/icon/icons/IconPlusSmall'

const Badge = () => (
  <>
    <GdsBadge variant="notice">Badge</GdsBadge>
    <GdsBadge variant="positive" notification>
      999 <IconPlusSmall slot="trail" />
    </GdsBadge>
  </>
)

export default Badge
