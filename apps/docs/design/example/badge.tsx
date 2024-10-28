'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const GdsBadge = dynamic(
  () => import('@sebgroup/green-react/core/badge').then((mod) => mod.GdsBadge),
  {
    ssr: false,
  },
)

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
