'use client'

import { GdsFlex, GdsRadio, GdsRadioGroup } from '$/import/components'

const Radio = ({ hero }: { hero?: boolean }) => (
  <>
    {hero ? (
      <GdsFlex max-width="340px" flex="1">
        <GdsRadioGroup
          label="Label"
          supportingText="This is a supporting text."
          value="1"
        >
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
          <GdsRadio
            value="1"
            label="Label one"
            supportingText="Supporting text one"
          ></GdsRadio>
          <GdsRadio
            value="2"
            label="Label two"
            supportingText="Supporting text two"
          ></GdsRadio>
          <GdsRadio
            value="3"
            label="Label three"
            supportingText="Supporting text three"
          ></GdsRadio>
        </GdsRadioGroup>
      </GdsFlex>
    ) : (
      <GdsFlex flex="1" width="240px">
        <GdsRadioGroup value="1">
          <GdsRadio value="1" label="Radio button 1"></GdsRadio>
          <GdsRadio value="2" label="Radio button 2"></GdsRadio>
          <GdsRadio value="3" label="Radio button 3"></GdsRadio>
        </GdsRadioGroup>
      </GdsFlex>
    )}
  </>
)

export default Radio
