'use client'

import { GdsInput } from '$/import/components'
import { IconCreditCard } from '$/import/icons'

const Input = () => (
  <GdsInput label="Input" value=" " clearable>
    <IconCreditCard slot="lead" />
  </GdsInput>
)

export default Input
