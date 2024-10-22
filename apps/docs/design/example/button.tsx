'use client'

import React from 'react'
import { GdsButton } from '@sebgroup/green-react/core/button'
import { IconCreditCard } from '@sebgroup/green-react/src/lib/icon/icons/IconCreditCard'

const Button = () => (
  <>
    <GdsButton>
      <IconCreditCard slot="lead"></IconCreditCard>
      Primary
    </GdsButton>
  </>
)

export default Button
