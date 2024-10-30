'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const GdsInput = dynamic(
  () => import('@sebgroup/green-react/core/input').then((mod) => mod.GdsInput),
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

const Input = () => (
  <>
    <GdsInput label="Input" value=" " clearable>
      <IconCreditCard slot="lead"></IconCreditCard>
    </GdsInput>
  </>
)

export default Input
