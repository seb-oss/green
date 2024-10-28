// eslint-disable-next-line
'use client'

import React from 'react'
import dynamic from 'next/dynamic'

// import { GdsBadge } from '@sebgroup/green-react/core/badge'
// import { IconPlusSmall } from '@sebgroup/green-react/src/lib/icon/icons/IconPlusSmall'

const GdsBadge = dynamic(() => import('@sebgroup/green-react/src/core/badge'), {
  ssr: false,
})

const IconPlusSmall = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons/IconPlusSmall').then(
      (mod) => mod.IconPlusSmall,
    ),
  {
    ssr: false,
  },
)

const Badge = () => (
  <>
    <GdsBadge variant="notice">Badge</GdsBadge>
    <GdsBadge variant="positive" notification>
      999 <IconPlusSmall slot="trail" />
    </GdsBadge>
  </>
)

export default Badge
