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
    <GdsInput
      label="Lead Icon"
      supporting-text="Example support text"
      size="small"
      clearable
      invalid
    >
      <IconCreditCard slot="lead"></IconCreditCard>
      <span slot="extended-supporting-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </span>
    </GdsInput>
  </>
)

export default Input
