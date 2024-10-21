import React from 'react'
import GdsInput from '@sebgroup/green-react/src/core/input'
import { IconCreditCard } from '@sebgroup/green-react/src/lib/icon/icons/IconCreditCard'

const Input = () => (
  <>
    <GdsInput label="Input" value=" " clearable>
      <IconCreditCard slot="lead"></IconCreditCard>
    </GdsInput>
  </>
)

export default Input
