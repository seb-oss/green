import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import './radio'
import './radio-group'
import '../flex/flex'
import '../card/card'
import '../text/text'
import '../divider/divider'

const meta: Meta = {
  title: 'Components/Radio',
  component: 'gds-radio-group',
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
    args: {
      label: 'Label',
      supportingText: 'Label support text.',
    },
  },
}

/**
 * TODO: Add documentation
 */
export const RadioButton: Story = {
  ...DefaultParams,
  name: 'Radio',
  args: {
    label: 'Label',
    supportingText: 'Label support text.',
    innerHTML: `
    <gds-radio label="Radio Option 1" supporting-text="Supporting text" value="1"></gds-radio>
    <gds-radio label="Radio Option 2" supporting-text="Supporting text" value="2"></gds-radio>
    <gds-radio label="Radio Option 3" supporting-text="Supporting text" value="3"></gds-radio>`,
  },
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
        value="4"
        show-extended-supporting-text
      >
        <span slot="extended-supporting-text">
          Extended supporting text for the group
        </span>
        <gds-radio
          label="Radio Label"
          value="1"
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          label="Radio Label"
          value="2"
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio label="Selected" value="3"></gds-radio>
        <gds-radio
          label="Radio Label"
          value="4"
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          label="Radio Label"
          value="5"
          disabled
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio label="Radio Label" value="5" disabled></gds-radio>
        <gds-radio
          label="Radio Label"
          value="6"
          supporting-text="Example support text"
        ></gds-radio>
      </gds-radio-group>
    </div>
  `,
}

/**
 * TODO: Add documentation
 */
export const Validation: Story = {
  ...DefaultParams,
  name: 'Validation',
  render: () => html`
    <div class="radio-group">
      <gds-radio-group
        label="Group Label"
        supporting-text="Support text for the group"
        value="4"
        show-extended-supporting-text
      >
        <span slot="extended-supporting-text">
          Extended supporting text for the group
        </span>
        <gds-radio
          label="Radio Label"
          value="1"
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          label="Radio Label"
          value="2"
          supporting-text="Example support text"
        ></gds-radio>
      </gds-radio-group>
    </div>
  `,
}

export const Required: Story = {
  ...DefaultParams,
  name: 'Required',
  render: () => html`
    <div class="radio-group">
      <gds-radio-group
        label="Group Label"
        supporting-text="Support text for the group"
        value="4"
        show-extended-supporting-text
      >
        <span slot="extended-supporting-text">
          Extended supporting text for the group
        </span>
        <gds-radio
          label="Radio Label"
          value="1"
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          label="Radio Label"
          value="2"
          supporting-text="Example support text"
        ></gds-radio>
      </gds-radio-group>
    </div>
  `,
}

export const Disabled: Story = {
  ...DefaultParams,
  name: 'Disabled',
  render: () => html`
    <div class="radio-group">
      <gds-radio-group
        label="Group Label"
        supporting-text="Support text for the group"
        show-extended-supporting-text
        value="4"
      >
        <span slot="extended-supporting-text">
          Extended supporting text for the group
        </span>
        <gds-radio
          label="Radio Label"
          value="1"
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          label="Radio Label"
          value="2"
          supporting-text="Example support text"
        ></gds-radio>
      </gds-radio-group>
    </div>
  `,
}

export const Size: Story = {
  ...DefaultParams,
  name: 'Size',
  render: () => html`
    <div class="radio-group">
      <gds-flex max-width="640px" gap="xl" margin="0 auto">
        <gds-card gap="s">
          <gds-text tag="small">Size: Large(default)</gds-text>
          <gds-divider opacity="0.1"></gds-divider>
          <gds-radio-group
            label="Group Label"
            supporting-text="Support text for the group"
            value="4"
            show-extended-supporting-text
          >
            <span slot="extended-supporting-text">
              Extended supporting text for the group
            </span>
            <gds-radio
              label="Radio Label"
              value="1"
              supporting-text="Example support text"
            ></gds-radio>
            <gds-radio
              label="Radio Label"
              value="2"
              supporting-text="Example support text"
            ></gds-radio>
          </gds-radio-group>
        </gds-card>
        <gds-card gap="s">
          <gds-text tag="small">Size: small</gds-text>
          <gds-divider opacity="0.1"></gds-divider>
          <gds-radio-group
            label="Group Label"
            supporting-text="Support text for the group"
            value="4"
            size="small"
            show-extended-supporting-text
          >
            <span slot="extended-supporting-text">
              Extended supporting text for the group
            </span>
            <gds-radio
              label="Radio Label"
              value="1"
              supporting-text="Example support text"
            ></gds-radio>
            <gds-radio
              label="Radio Label"
              value="2"
              supporting-text="Example support text"
            ></gds-radio>
          </gds-radio-group>
        </gds-card>
      </gds-flex>
    </div>
  `,
}

export const GroupLabel: Story = {
  ...DefaultParams,
  name: 'No Label on group',
  render: () => html`
    <div class="radio-group">
      <gds-radio-group>
        <span slot="extended-supporting-text">
          Extended supporting text for the group
        </span>
        <gds-radio label="Radio Label" value="1"></gds-radio>
        <gds-radio label="Radio Label" value="2"></gds-radio>
      </gds-radio-group>
    </div>
  `,
}
