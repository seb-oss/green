'use client'

import { GdsInput } from '$/import/components'
import { IconCreditCard } from '$/import/icons'

const Input = () => (
  <GdsInput
    label="Lead Icon"
    supporting-text="Example support text"
    size="small"
    clearable
    invalid
  >
    <IconCreditCard slot="lead" />
    <span slot="extended-supporting-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </span>
  </GdsInput>
)

export default Input
