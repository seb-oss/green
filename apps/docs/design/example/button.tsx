'use client'

import { GdsButton } from '$/import/components'
import { IconCreditCard } from '$/import/icons'

const Button = () => (
  <GdsButton>
    <IconCreditCard slot="lead"></IconCreditCard>
    Primary
  </GdsButton>
)

export default Button
