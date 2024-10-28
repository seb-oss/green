'use client'

import React from 'react'
import dynamic from 'next/dynamic'

// import { GdsInput } from '@sebgroup/green-react/core/input'
// import { IconCreditCard } from '@sebgroup/green-react/src/lib/icon/icons/IconCreditCard'

const GdsInput = dynamic(() => import('@sebgroup/green-react/core/input'), {
  ssr: false,
})

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
