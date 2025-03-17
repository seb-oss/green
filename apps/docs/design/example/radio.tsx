'use client'

import { GdsFlex, GdsRadio, GdsRadioGroup } from '$/import/components'

const Radio = ({ hero }: { hero?: boolean }) => (
  <>
    {hero ? (
      <GdsFlex max-width="340px" flex="1">
        <GdsRadioGroup
          label={'Select a option'}
          value="1"
          error-message="Please select an option"
          supporting-text="Please select one of the following options"
        >
          <GdsRadio
            value="1"
            label="Option 1"
            supportingText="Supporting text for option 1"
          ></GdsRadio>
          <GdsRadio
            value="2"
            label="Option 2"
            supportingText="Supporting text for option 2"
            disabled={true}
          ></GdsRadio>
          <GdsRadio
            value="3"
            label="Option 3"
            supportingText="Supporting text for option 3"
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
