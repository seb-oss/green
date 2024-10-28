'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const GdsButton = dynamic(
  () =>
    import('@sebgroup/green-react/core/button').then((mod) => mod.GdsButton),
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
