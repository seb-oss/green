'use client'

import { GdsFlex, GdsSelect } from '$/import/components'
import { IconBooks } from '$/import/icons'

const Select = ({ hero }: { hero?: boolean }) => (
  <>
    {hero ? (
      <GdsFlex max-width="340px" flex="1">
        <GdsSelect label="Label" supportingText="This is a supporting text.">
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
          <IconBooks slot="lead"></IconBooks>
          <select>
            <optgroup label="Physics">
              <option value="quantum-mechanics">Quantum Mechanics</option>
              <option value="relativity">Relativity</option>
            </optgroup>
            <optgroup label="Chemistry">
              <option value="organic-chemistry">Organic Chemistry</option>
              <option value="inorganic-chemistry">Inorganic Chemistry</option>
            </optgroup>
            <optgroup label="Biology">
              <option value="genetics">Genetics</option>
              <option value="microbiology">Microbiology</option>
              <option value="ecology">Ecology</option>
            </optgroup>
          </select>
        </GdsSelect>
      </GdsFlex>
    ) : (
      <GdsFlex flex="1" width="240px">
        <GdsSelect label="Select">
          <IconBooks slot="lead"></IconBooks>
          <select>
            <optgroup label="Group">
              <option value="option-1">Option 1</option>
              <option value="option-2">Option 2</option>
              <option value="option-3">Option 3</option>
            </optgroup>
          </select>
        </GdsSelect>
      </GdsFlex>
    )}
  </>
)

export default Select
