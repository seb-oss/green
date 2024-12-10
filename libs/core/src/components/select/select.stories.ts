import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import './select'
import '../flex'
import '../icon/icons/car.ts'

const meta: Meta = {
  title: 'Components/Select',
  component: 'gds-select',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

const DefaultParams: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
    controls: { expanded: true },
  },
}

/**
 * TODO: Add documentation
 */
export const select: Story = {
  ...DefaultParams,
  name: 'select',
  args: {
    placeholder: 'Car Brands',
    innerHTML: `
      <gds-icon-car slot="lead"></gds-icon-car>
      <select>
        <optgroup label="Swedish">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
        </optgroup>
        <optgroup label="German">
          <option value="mercedes">Mercedes-Benz</option>
          <option value="audi">Audi</option>
        </optgroup>
        <optgroup label="Italian">
          <option value="ferrari">Ferrari</option>
          <option value="lamborghini">Lamborghini</option>
          <option value="fiat">Fiat</option>
        </optgroup>
      </select>
    `,
  },
}

/**
 * ```
 */
export const Option: Story = {
  ...DefaultParams,
  name: 'Option',
  render: () => html`
    <gds-flex>
      <gds-select placeholder="Car Make">
        <gds-icon-car slot="lead"></gds-icon-car>
        <select>
          <optgroup label="Swedish Cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
          </optgroup>
          <optgroup label="German Cars">
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </optgroup>
        </select>
      </gds-select>
    </gds-flex>
  `,
}
