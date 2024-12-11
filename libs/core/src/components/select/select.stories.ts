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
 * Select Option
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

/**
 * Disabled
 */
export const Disabled: Story = {
  ...DefaultParams,
  name: 'Disabled',
  render: () => html`
    <gds-flex>
      <gds-select disabled placeholder="Car Make">
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

/**
 * Validation
 */
export const Validation: Story = {
  ...DefaultParams,
  name: 'Validation',
  render: () => html`
    <gds-flex>
      <gds-select
        .invalid=${true}
        .validator=${{
          validate: (el: any) => {
            if (el.value === '')
              return [
                {
                  ...el.validity,
                  valid: false,
                  customError: true,
                },
                'Error message.',
              ]
            else if (el.value.length !== 12 || isNaN(el.value))
              return [
                {
                  ...el.validity,
                  valid: false,
                  customError: true,
                },
                'The value must be 12 characters long.',
              ]
          },
        }}
        placeholder="Car Make"
      >
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

/**
 * Disabled
 */
export const Size: Story = {
  ...DefaultParams,
  name: 'Size',
  render: () => html`
    <gds-flex>
      <gds-select size="small" placeholder="Car Make">
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
