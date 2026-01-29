import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components-vite'

import './checkbox'
import './checkbox-group/checkbox-group'
import '../flex/flex'
import '../card/card'
import '../text/text'
import '../divider/divider'
import '../icon/icons/circle-check'
import '../icon/icons/cross-small'
import '../icon/icons/minus-small'

import { argTablePropsFor } from '../../../.storybook/argTableProps'
import { GdsCheckboxGroup } from './checkbox-group/checkbox-group'

/**
 * A checkbox is a form element that allows users to select one or multiple options.<br/>
 * They can be grouped together using a checkbox group, which makes value management and validation easier.
 *
 * Groups support vertical and horizontal layouts, and can be sized to fit different space requirements.
 */
const meta: Meta = {
  title: 'Components/Checkbox',
  component: 'gds-checkbox-group',
  subcomponents: { GdsCheckbox: 'gds-checkbox' },
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-checkbox-group'),
  },
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
 * Checkboxes allow users to select one or more option from a list of options.<br />
 * Each checkbox must have both a label and a value.
 *
 * Usage:
 *
 * ```html
 * <gds-checkbox-group label="Select an option">
 *   <gds-checkbox label="Option 1" value="1"></gds-checkbox>
 *   <gds-checkbox label="Option 2" value="2"></gds-checkbox>
 * </gds-checkbox-group>
 * ```
 *
 * Interactive example with supporting texts:
 */
export const CheckboxButton: Story = {
  ...DefaultParams,
  name: 'Checkbox',
  args: {
    label: 'Pick an option',
    supportingText: 'Label support text.',
    innerHTML: `
    <gds-checkbox label="Checkbox Option 1" supporting-text="Supporting text" value="1"></gds-checkbox>
    <gds-checkbox label="Checkbox Option 2" supporting-text="Supporting text" value="2" checked></gds-checkbox>
    <gds-checkbox label="Checkbox Option 3" supporting-text="Supporting text" value="3"></gds-checkbox>`,
  },
}

/**
 * Checkbox groups support validation using Green Core's [form validation API](/docs/components-form-validation-documentation--docs).
 *
 * The error message appears below the checkbox group, and can be set either trough a validator, or explicitly using the using the `error-message` attribute.
 *
 * If you click on 'submit' first on the example below it will validate the checkbox group and show the error message.
 */
export const Validation: Story = {
  ...DefaultParams,
  name: 'Validation',
  render: () => html`
    <form method="dialog">
      <gds-flex flex-direction="column" align-items="flex-start" gap="m">
        <gds-checkbox-group
          label="Group Label"
          name="checkbox-group"
          supporting-text="Support text for the group"
          show-extended-supporting-text
          .validator=${{
            validate: (el: GdsCheckboxGroup) => {
              if (el.value!.length < 1)
                return [
                  { ...el.validity, valid: false, customError: true },
                  'This is required',
                ]
            },
          }}
        >
          <span slot="extended-supporting-text">
            Extended supporting text for the group
          </span>
          <gds-checkbox
            label="Checkbox Label"
            value="1"
            supporting-text="Example support text"
          ></gds-checkbox>
          <gds-checkbox
            label="Checkbox Label"
            value="2"
            supporting-text="Example support text"
          ></gds-checkbox>
        </gds-checkbox-group>
        <gds-button type="submit">Submit</gds-button>
      </gds-flex>
    </form>
  `,
}

export const DosAndDonts: Story = {
  ...DefaultParams,
  name: "Do's and don'ts",
  render: () => html`
    <gds-flex gap="xl">
      <gds-flex gap="l" flex-direction="column" flex="1">
        <gds-card
          align-items="center"
          flex-direction="row"
          gap="2xs"
          padding="s"
          variant="positive"
        >
          <gds-icon-circle-check></gds-icon-circle-check>
          <gds-text tag="small">Do provide both Label and Value</gds-text>
        </gds-card>
        <gds-card align-items="flex-start" gap="m">
          <gds-checkbox-group
            label="Group Label"
            supporting-text="Support text"
          >
            <span slot="extended-supporting-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
            <gds-checkbox label="Checkbox Label" value="1"></gds-checkbox>
            <gds-checkbox label="Checkbox Label" value="2"></gds-checkbox>
          </gds-checkbox-group>
        </gds-card>
      </gds-flex>
      <gds-flex gap="l" flex-direction="column" flex="1">
        <gds-card
          align-items="center"
          flex-direction="row"
          gap="2xs"
          padding="s"
          variant="negative"
        >
          <gds-icon-cross-small></gds-icon-cross-small>
          <gds-text tag="small">Never exclude the label</gds-text>
        </gds-card>
        <form method="dialog">
          <gds-card align-items="flex-start" gap="m">
            <gds-checkbox-group
              label="Group Label"
              supporting-text="Support text"
            >
              <span slot="extended-supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <gds-checkbox value="1"></gds-checkbox>
              <gds-checkbox value="2"></gds-checkbox>
            </gds-checkbox-group>
          </gds-card>
        </form>
      </gds-flex>
      <gds-flex gap="l" flex-direction="column" flex="1">
        <gds-card
          align-items="center"
          flex-direction="row"
          gap="2xs"
          padding="s"
          variant="negative"
        >
          <gds-icon-cross-small></gds-icon-cross-small>
          <gds-text tag="small">Never exclude the value </gds-text>
        </gds-card>
        <form method="dialog">
          <gds-card align-items="flex-start" gap="m">
            <gds-checkbox-group
              label="Group Label"
              supporting-text="Support text"
            >
              <span slot="extended-supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
              <gds-checkbox label="Checkbox Label"></gds-checkbox>
              <gds-checkbox label="Checkbox Label"></gds-checkbox>
            </gds-checkbox-group>
          </gds-card>
        </form>
      </gds-flex>
    </gds-flex>
  `,
}

/**
 * Disabled checkboxes cannot be interacted with and appear visually muted.
 *
 * In general, this state should never be used. Instead, aim to explain to the user why the choice is wrong in an error message and make sure they understand how to correct it.
 */
export const Disabled: Story = {
  ...DefaultParams,
  name: 'Disabled',
  render: () => html`
    <div class="checkbox-group">
      <gds-checkbox-group
        label="Group Label"
        supporting-text="Support text for the group"
        show-extended-supporting-text
      >
        <span slot="extended-supporting-text">
          Extended supporting text for the group
        </span>
        <gds-checkbox
          label="Checkbox Label"
          value="1"
          disabled
          supporting-text="Example support text"
        ></gds-checkbox>
        <gds-checkbox
          label="Checkbox Label"
          value="2"
          disabled
          supporting-text="Example support text"
        ></gds-checkbox>
      </gds-checkbox-group>
    </div>
  `,
}

/**
 * Checkboxes support two sizes:
 * - Large (default): Standard size for most use cases
 * - Small: Compact size for space-constrained layouts
 *
 * The size can be set on the checkbox group and applies to all checkboxes within.
 */
export const Size: Story = {
  ...DefaultParams,
  name: 'Size',
  render: () => html`
    <div class="checkbox-group">
      <gds-flex gap="xl" margin="0 auto">
        <gds-flex gap="s" flex-direction="column" flex="1">
          <gds-text tag="small">Size: Large(default)</gds-text>
          <gds-divider opacity="0.1"></gds-divider>
          <gds-checkbox-group
            label="Group Label"
            supporting-text="Support text for the group"
            show-extended-supporting-text
          >
            <span slot="extended-supporting-text">
              Extended supporting text for the group
            </span>
            <gds-checkbox
              label="Checkbox Label"
              value="1"
              supporting-text="Example support text"
              checked
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="2"
              supporting-text="Example support text"
            ></gds-checkbox>
          </gds-checkbox-group>
        </gds-flex>
        <gds-flex gap="s" flex-direction="column" flex="1">
          <gds-text tag="small">Size: small</gds-text>
          <gds-divider opacity="0.1"></gds-divider>
          <gds-checkbox-group
            label="Group Label"
            supporting-text="Support text for the group"
            size="small"
            show-extended-supporting-text
          >
            <span slot="extended-supporting-text">
              Extended supporting text for the group
            </span>
            <gds-checkbox
              label="Checkbox Label"
              value="1"
              supporting-text="Example support text."
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="2"
              supporting-text="Example support text"
            ></gds-checkbox>
          </gds-checkbox-group>
        </gds-flex>
      </gds-flex>
    </div>
  `,
}

/**
 * Checkboxes can be arranged in two directions:
 * - Column (default): Vertical stacking for clear separation
 * - Row: Horizontal alignment for compact layouts that will break to new line when not enough space is available
 *
 * Choose the direction based on available space and number of options.
 */
export const Direction: Story = {
  ...DefaultParams,
  name: 'Direction',
  render: () => html`
    <div class="checkbox-group">
      <gds-flex gap="xl" margin="0 auto">
        <gds-flex gap="s" flex-direction="column">
          <gds-text tag="small">Column (default)</gds-text>
          <gds-divider opacity="0.1"></gds-divider>
          <gds-checkbox-group
            label="Group Label"
            supporting-text="Support text for the group"
            show-extended-supporting-text
          >
            <span slot="extended-supporting-text">
              Extended supporting text for the group
            </span>
            <gds-checkbox
              label="Checkbox Label"
              value="1"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="2"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="3"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="4"
              supporting-text="Example support text"
            ></gds-checkbox>
          </gds-checkbox-group>
        </gds-flex>
        <gds-flex gap="s" flex="1" flex-direction="column">
          <gds-text tag="small">Row</gds-text>
          <gds-divider opacity="0.1"></gds-divider>
          <gds-checkbox-group
            label="Group Label"
            supporting-text="Support text for the group"
            size="small"
            direction="row"
            show-extended-supporting-text
          >
            <span slot="extended-supporting-text">
              Extended supporting text for the group
            </span>
            <gds-checkbox
              label="Checkbox Label"
              value="1"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="2"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="3"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="4"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="5"
              supporting-text="Example support text"
            ></gds-checkbox>
            <gds-checkbox
              label="Checkbox Label"
              value="6"
              supporting-text="Example support text"
            ></gds-checkbox>
          </gds-checkbox-group>
        </gds-flex>
      </gds-flex>
    </div>
  `,
}

/**
 * While checkbox groups can be created without a label, it's recommended to always provide one for clarity and accessibility.
 * The label helps users understand what the options are for.
 *
 * In certain cases when space is limited, the group label can be omitted.
 */
export const GroupLabel: Story = {
  ...DefaultParams,
  name: 'Checkbox group label',
  render: () => html`
    <div class="checkbox-group">
      <gds-checkbox-group>
        <gds-checkbox label="Checkbox Label" value="1"></gds-checkbox>
        <gds-checkbox label="Checkbox Label" value="2"></gds-checkbox>
      </gds-checkbox-group>
      <br />
      <br />
      <br />
      <gds-checkbox-group size="small">
        <gds-checkbox label="Checkbox Label" value="1"></gds-checkbox>
        <gds-checkbox label="Checkbox Label" value="2"></gds-checkbox>
      </gds-checkbox-group>
    </div>
  `,
}

/**
 * The indeterminate state is used when a checkbox represents a group of sub-options with mixed selected states.
 * Common use cases include:
 * - Parent checkboxes in a tree structure where some but not all children are checked
 * - "Select all" checkboxes when some items are selected
 * - Bulk actions where the selection applies to only some items in a group
 */
export const Indeterminate: Story = {
  ...DefaultParams,
  name: 'Indeterminate',
  render: () => html`
    <gds-checkbox label="Select all" value="1" indeterminate></gds-checkbox>
  `,
}

/**
 * Sometimes you need a single checkbox where the checkbox group label should be visually hidden but still accessible to screen readers.
 * In this case you should still provide a meaningful group label and hide it visually with the `hide-label` attribute or `hideLabel` property.
 * Common use cases include:
 * - Confirming that one has read terms and conditions
 * - Agreeing to privacy policies
 * - Opting into newsletters or marketing communications
 */
export const SingleCheckbox: Story = {
  ...DefaultParams,
  name: 'Single checkbox',
  render: () => html`
    <gds-checkbox-group label="Group Label" hide-label>
      <gds-checkbox label="Checkbox Label" value="1" checked></gds-checkbox>
    </gds-checkbox-group>
  `,
}
