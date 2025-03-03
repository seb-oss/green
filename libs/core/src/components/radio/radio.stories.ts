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
 * Radio buttons allow users to select a single option from a list of two or more mutually exclusive options.<br />
 * Each radio button must have both a label and a value.
 *
 * Usage:
 *
 * ```html
 * <gds-radio-group label="Select an option">
 *   <gds-radio label="Option 1" value="1"></gds-radio>
 *   <gds-radio label="Option 2" value="2"></gds-radio>
 * </gds-radio-group>
 * ```
 *
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
 * Radio buttons can be in different states:
 * - Default: The normal, interactive state
 * - Selected: When a radio button is chosen
 * - Disabled: When the radio button cannot be interacted with
 * - With supporting text: Additional context below the label
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
 * Radio groups support validation:
 * - Required selection: Shows error when no option is selected
 * - Missing properties: Shows error when radios lack required label or value
 * - Minimum options: Shows error when group has fewer than two radio buttons
 *
 * The error message appears below the radio group.
 */
export const Validation: Story = {
  ...DefaultParams,
  name: 'Validation',
  render: () => html`
    <div class="radio-group">
      <gds-radio-group
        label="Group Label"
        supporting-text="Support text for the group"
        show-extended-supporting-text
        required
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

/**
 * This example demonstrates validation when radio buttons are missing required properties.
 * Each radio button must have both:
 * - label: The text displayed next to the radio button
 * - value: The data value associated with the option
 */
export const MissingLabel: Story = {
  ...DefaultParams,
  name: 'Missing Label',
  render: () => html`
    <gds-flex gap="xl">
      <gds-flex gap="s" flex-direction="column" flex="1">
        <gds-text tag="small">Valid: Label and Value</gds-text>
        <gds-divider opacity="0.1"></gds-divider>
        <gds-radio-group>
          <gds-radio label="Radio Label" value="1"></gds-radio>
          <gds-radio label="Radio Label" value="2"></gds-radio>
        </gds-radio-group>
      </gds-flex>
      <gds-flex gap="s" flex-direction="column" flex="1">
        <gds-text tag="small">Invalid: Missing label</gds-text>
        <gds-divider opacity="0.1"></gds-divider>
        <gds-radio-group>
          <gds-radio value="1"></gds-radio>
          <gds-radio value="2"></gds-radio>
        </gds-radio-group>
      </gds-flex>
      <gds-flex gap="s" flex-direction="column" flex="1">
        <gds-text tag="small">Invalid: Missing value</gds-text>
        <gds-divider opacity="0.1"></gds-divider>
        <gds-radio-group>
          <gds-radio label="Radio Label"></gds-radio>
          <gds-radio label="Radio Label"></gds-radio>
        </gds-radio-group>
      </gds-flex>
    </gds-flex>
  `,
}

/**
 * This example shows the validation error when attempting to create a radio group with only one radio button.<br/>
 * Radio groups must contain at least two options to provide a meaningful choice.
 */
export const Single: Story = {
  ...DefaultParams,
  name: 'Single Radio',
  render: () => html`
    <div class="radio-group">
      <gds-radio-group>
        <gds-radio value="1" label="Missing value"></gds-radio>
      </gds-radio-group>
    </div>
  `,
}

/**
 * When the required attribute is set on a radio group, users must select an option before form submission.
 * An error message is displayed if the form is submitted without a selection.
 */
export const Required: Story = {
  ...DefaultParams,
  name: 'Required',
  render: () => html`
    <div class="radio-group">
      <gds-radio-group
        label="Group Label"
        supporting-text="Support text for the group"
        required
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

/**
 * Disabled radio buttons cannot be interacted with and appear visually muted.
 * Use this state for options that are temporarily unavailable.
 */
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
          disabled
          supporting-text="Example support text"
        ></gds-radio>
        <gds-radio
          label="Radio Label"
          value="2"
          disabled
          supporting-text="Example support text"
        ></gds-radio>
      </gds-radio-group>
    </div>
  `,
}

/**
 * Radio buttons support two sizes:
 * - Large (default): Standard size for most use cases
 * - Small: Compact size for space-constrained layouts
 *
 * The size can be set on the radio group and applies to all radio buttons within.
 */
export const Size: Story = {
  ...DefaultParams,
  name: 'Size',
  render: () => html`
    <div class="radio-group">
      <gds-flex gap="xl" margin="0 auto">
        <gds-flex gap="s" flex-direction="column" flex="1">
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
        </gds-flex>
        <gds-flex gap="s" flex-direction="column" flex="1">
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
        </gds-flex>
      </gds-flex>
    </div>
  `,
}

/**
 * Radio buttons can be arranged in two directions:
 * - Column (default): Vertical stacking for clear separation
 * - Row: Horizontal alignment for compact layouts that will break to new line when not enough space is available
 *
 * Choose the direction based on available space and number of options.
 */
export const Direction: Story = {
  ...DefaultParams,
  name: 'Direction',
  render: () => html`
    <div class="radio-group">
      <gds-flex gap="xl" margin="0 auto">
        <gds-flex gap="s" flex-direction="column">
          <gds-text tag="small">Column (default)</gds-text>
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
            <gds-radio
              label="Radio Label"
              value="3"
              supporting-text="Example support text"
            ></gds-radio>
            <gds-radio
              label="Radio Label"
              value="4"
              supporting-text="Example support text"
            ></gds-radio>
          </gds-radio-group>
        </gds-flex>
        <gds-flex gap="s" flex="1" flex-direction="column">
          <gds-text tag="small">Row</gds-text>
          <gds-divider opacity="0.1"></gds-divider>
          <gds-radio-group
            label="Group Label"
            supporting-text="Support text for the group"
            value="4"
            size="small"
            direction="row"
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
            <gds-radio
              label="Radio Label"
              value="3"
              supporting-text="Example support text"
            ></gds-radio>
            <gds-radio
              label="Radio Label"
              value="4"
              supporting-text="Example support text"
            ></gds-radio>
            <gds-radio
              label="Radio Label"
              value="5"
              supporting-text="Example support text"
            ></gds-radio>
            <gds-radio
              label="Radio Label"
              value="6"
              supporting-text="Example support text"
            ></gds-radio>
          </gds-radio-group>
        </gds-flex>
      </gds-flex>
    </div>
  `,
}

/**
 * While radio groups can be created without a label, it's recommended to always provide one for clarity and accessibility.
 * The label helps users understand what the options are for.
 *
 * In certain cases when space is limited, the group label can be omitted.
 */
export const GroupLabel: Story = {
  ...DefaultParams,
  name: 'Radio group label',
  render: () => html`
    <div class="radio-group">
      <gds-radio-group>
        <gds-radio label="Radio Label" value="1"></gds-radio>
        <gds-radio label="Radio Label" value="2"></gds-radio>
      </gds-radio-group>
    </div>
  `,
}
