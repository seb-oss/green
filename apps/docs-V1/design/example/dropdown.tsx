'use client'

import { GdsDropdown, GdsFlex, GdsOption } from '$/import/components'

const Dropdown = ({ hero }: { hero?: boolean }) => (
  <>
    {hero ? (
      <GdsFlex max-width="340px" flex="1">
        <GdsDropdown
          value="1"
          label="Label"
          supportingText="This is a supporting text."
        >
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
          <GdsOption value="1">Dropdown</GdsOption>
          <GdsOption value="2">Dropdown Item 2</GdsOption>
          <GdsOption value="3">Dropdown Item 3</GdsOption>
        </GdsDropdown>
      </GdsFlex>
    ) : (
      <GdsFlex flex="1" width="240px">
        <GdsDropdown label="Dropdown">
          <GdsOption value="1">Dropdown</GdsOption>
          <GdsOption value="2">Dropdown Item 2</GdsOption>
          <GdsOption value="3">Dropdown Item 3</GdsOption>
        </GdsDropdown>
      </GdsFlex>
    )}
  </>
)

export default Dropdown
