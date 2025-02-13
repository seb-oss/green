'use client'

import { GdsFlex, GdsTextarea } from '$/import/components'
import { IconCreditCard } from '$/import/icons'

const Textarea = ({ hero }: { hero?: boolean }) => (
  <>
    {hero ? (
      <GdsFlex max-width="300px">
        <GdsTextarea
          label="Label"
          supportingText="This is a supporting text."
          clearable
        >
          <IconCreditCard slot="lead" />
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </GdsTextarea>
      </GdsFlex>
    ) : (
      <GdsTextarea label="Textarea" clearable>
        <IconCreditCard slot="lead" />
      </GdsTextarea>
    )}
  </>
)

export default Textarea
