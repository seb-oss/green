import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import './radio'
import './radio-group'
import '../flex/flex'

const meta: Meta = {
  title: 'Components/Radio',
  component: 'gds-radio',
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
export const RadioButton: Story = {
  ...DefaultParams,
  name: 'radio',
}

/**
 */
export const States: Story = {
  ...DefaultParams,
  name: 'States',
  render: () => html`
    <div class="radio-group">
      <gds-radio-group
        label="Group Label"
        supporting-text="Support text for the group"
        show-extended-supporting-text
      >
        <span slot="extended-supporting-text">
          Extended supporting text for the group
        </span>
        <gds-radio
          label="Radio Label"
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          label="Radio Label"
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          selected
          label="Selected"
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          label="Radio Label"
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          label="Radio Label"
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          label="Radio Label"
          supporting-text="Example support text"
        ></gds-radio>
      </gds-radio-group>
    </div>
  `,
}
