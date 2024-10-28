'use client'

import React from 'react'
import dynamic from 'next/dynamic'

// import { GdsButton } from '@sebgroup/green-react/core/button'
// import { IconCreditCard } from '@sebgroup/green-react/src/lib/icon/icons/IconCreditCard'

const GdsButton = dynamic(
  () => import('@sebgroup/green-react/src/core/button'),
  {
    ssr: false,
  },
)

const IconCreditCard = dynamic(
  () =>
    import('@sebgroup/green-react/src/lib/icon/icons/IconCreditCard').then(
      (mod) => mod.IconCreditCard,
    ),
  {
    ssr: false,
  },
)

const Button = () => (
  <>
    <GdsButton>
      <IconCreditCard slot="lead"></IconCreditCard>
      Primary
    </GdsButton>
  </>
)

export default Button
