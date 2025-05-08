'use client'

import { GdsFlex, GdsInput } from '$/import/components'
import { IconCreditCard } from '$/import/icons'

const Input = ({ hero }: { hero?: boolean }) => (
  <>
    {hero ? (
      <GdsFlex>
        <GdsInput label="Label" value=" " clearable>
          <IconCreditCard slot="lead" />
        </GdsInput>
      </GdsFlex>
    ) : (
      <GdsInput label="Label" value=" " clearable>
        <IconCreditCard slot="lead" />
      </GdsInput>
    )}
  </>
)

export default Input
