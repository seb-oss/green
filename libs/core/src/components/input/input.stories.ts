import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components-vite'

import './index.ts'

import type { GdsFormControlElement } from '../form/form-control.ts'
import type { GdsInput } from './index.ts'

import '../badge'
import '../flex'
import '../divider'
import '../icon/icons/credit-card.ts'
import '../icon/icons/magnifying-glass.ts'
import '../icon/icons/people-profile.ts'

import { argTablePropsFor } from '../../../.storybook/argTableProps.ts'
import { GdsBadge } from '../badge'

/**
 * An input lets users enter and edit text or numerical values in forms.
 *
 */
const meta: Meta = {
  title: 'Components/Input',
  component: 'gds-input',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-input'),
    value: {
      control: 'text',
    },
    variant: {
      options: ['default'],
      control: { type: 'select' },
    },
    size: {
      options: ['large', 'small'],
      control: { type: 'select' },
    },
    invalid: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<GdsInput>

const DefaultParams: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
    controls: {
      expanded: true,
    },
  },
  args: {
    label: 'Label',
    variant: 'default',
    size: 'large',
    supportingText: 'Label support text.',
    innerHTML:
      '<gds-icon-people-profile slot="lead"></gds-icon-people-profile>',
  },
}

export const Default: Story = {
  ...DefaultParams,
  name: 'Default',
}

/**
 * The `size` property can be set to 'small' to reduce the size of the input field.<br>
 * **@property size** - The size of the input field.
 *
 * ```html
 *  <gds-input size="small"></gds-input>
 * ```
 */
export const Size: Story = {
  ...DefaultParams,
  name: 'Size',
  render: () => html`
    <gds-flex width="800px" gap="4xl" align-items="flex-start">
      <gds-input label="Lead Icon" size="small">
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-input>
      <gds-input
        label="Lead Icon"
        supporting-text="Example support text"
        size="small"
        clearable
        .validator=${{
          validate: (el: any) => {
            if (el.value === '')
              return [
                {
                  ...el.validity,
                  valid: false,
                  customError: true,
                },
                'Required field.',
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
      >
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </gds-input>
    </gds-flex>
  `,
}

/**
 * **@slot lead** - Slot for an icon or other content to be placed at the beginning of the input field.
 *
 * ```html
 *  <gds-input label="Lead Icon">
 *    <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
 * </gds-input>```
 * */
export const Lead: Story = {
  ...DefaultParams,
  name: 'Slot: Lead',
  render: () => html`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input label="Lead Icon">
        <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
      </gds-input>
    </gds-flex>
  `,
}

/**
 *
 * **@slot trail** - Slot for an icon or other content to be placed at the end of the input field.
 *
 * ```html
 *  <gds-input label="Trail Icon">
 *    <gds-badge variant="information" slot="trail">USD</gds-badge>
 * </gds-input>```
 * */
export const Trail: Story = {
  ...DefaultParams,
  name: 'Slot: Trail',
  render: () => html`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input
        label="Label"
        supporting-text="Label support text"
        value="10,000.00"
        clearable
      >
        <gds-badge variant="information" slot="trail">USD</gds-badge>
      </gds-input>
    </gds-flex>
  `,
}

/**
 * The `length` property can be set to a number to limit the number of characters that can be entered into the input field.<br> A badge will be displayed, updating as the input approaches the character limit.
 *
 * **@property maxLength** - The maximum number of characters that can be entered into the input field.
 *
 * ```html
 *  <gds-input maxLength="20"></gds-input>
 * ```
 * */
export const Length: Story = {
  ...DefaultParams,
  name: 'Length',
  render: () => html`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input
        label="Label"
        supporting-text="Label support text"
        value="Example value"
        maxLength="20"
        clearable
      >
      </gds-input>
    </gds-flex>
  `,
}

/**
 * When the `clearable` property is set, a clear button is added, allowing users to quickly clear the text.
 *
 * @property clearable - Enables the clear button for the input field.
 *
 * ```html
 *  <gds-input label="Label text" value="Clear this text" clearable></gds-input>
 * ```
 */
export const Clearable: Story = {
  ...DefaultParams,
  name: 'Clearable',
  render: () => html`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input
        label="Label text"
        value="Clear this text"
        clearable
      ></gds-input>
    </gds-flex>
  `,
}

/**
 * The `supporting-text` property can be set to a string to provide additional information about the input field.
 *
 * **@property supporting-text** - Additional information about the input field.
 *
 * ```html
 *   <gds-input label="Label text" supporting-text="Supporting text"></gds-input>
 * ```
 */
export const SupportingText: Story = {
  ...DefaultParams,
  name: 'Supporting Text',
  render: () => html`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input label="Label" supporting-text="Supporting text"></gds-input>
    </gds-flex>
  `,
}

/**
 * The `extended-supporting-text` slot can be used to provide extended information about the input field.<br>
 * The slot will show by default when the `show-extended-supporting-text` property is set.<br>
 * If not specified, the slot will be hidden and a companion icon will be displayed to indicate that more information is available.
 *
 * **@slot extended-supporting-text** - Extended information about the input field.
 *
 * ```html
 * <gds-input label="Label text" supporting-text="Supporting text">
 *   <span slot="extended-supporting-text">Extended supporting text</span>
 * </gds-input>
 * ```
 *
 * **@property show-extended-supporting-text** - Shows the extended supporting text.
 *
 * ```html
 * <gds-input show-extended-supporting-text></gds-input>
 * ```
 */
export const ExtendedSupportingText: Story = {
  ...DefaultParams,
  name: 'Extended Supporting Text',
  render: () => html`
    <gds-flex gap="xl" width="800px">
      <gds-input label="Label text" supporting-text="Supporting text">
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </gds-input>
      <gds-input
        label="Label text"
        supporting-text="Supporting text"
        show-extended-supporting-text
      >
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </gds-input>
    </gds-flex>
  `,
}

/**
 * Input has built-in support for form validation.<br>The validation feature is built on top of the browsers native validation features, using `ElementInternals` and `Constraint Validation API`.
 *
 * Validation is configured by adding a validator to a form element.<br> A validator is an object that implements the `GdsValidator` interface:
 *
 * ```html
 * <gds-input
 *  label="Label"
 *  value=" "
 *  .validator=${{
 *    validate: (el: any) => {
 *      if (el.value === '')
 *        return [
 *          {
 *            ...el.validity,
 *            valid: false,
 *            customError: true,
 *          },
 *          'Error message.',
 *        ]
 *    },
 *  }}></gds-input>
 * ```
 * **@property invalid** - Indicates that the input field contains an error.
 *
 * ```html
 * <gds-input invalid></gds-input>
 * ```
 */
export const Validation: Story = {
  ...DefaultParams,
  name: 'Validation',
  render: () => html`
    <gds-flex flex-direction="column" width="800px">
      <gds-flex gap="xl">
        <gds-input
          label="Label"
          supporting-text="Label support text"
          value=" "
          .validator=${{
            validate: (
              el: GdsFormControlElement,
            ): [ValidityState, string] | undefined => {
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
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-input>

        <gds-input
          label="Label"
          supporting-text="Label support text"
          value="Incorrect value"
          clearable
          .invalid=${true}
          error-message="This displays if the input is invalid."
          .validator=${{
            validate: (
              el: GdsFormControlElement,
            ): [ValidityState, string] | undefined => {
              if (el.value === '')
                return [
                  {
                    ...el.validity,
                    valid: false,
                    customError: true,
                  },
                  'This displays if the input doesn`t have any value.',
                ]
              else if (el.value.length !== 12 || isNaN(el.value))
                return [
                  {
                    ...el.validity,
                    valid: false,
                    customError: true,
                  },
                  'The value must be 12 characters long. ',
                ]
            },
          }}
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-input>
      </gds-flex>
    </gds-flex>
  `,
}

/**
 * Most standard attributes are supported, and will be forwarded to the internal input element.
 */
export const StandardAttributes: Story = {
  ...DefaultParams,
  name: 'Standard Attributes',
  render: () => html`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-input
        label="Label"
        supporting-text="Using standard attributes"
        min="0"
        max="100"
        step="5"
        type="number"
        autocapitalize="on"
        autocomplete="on"
        autocorrect="on"
        spellcheck="true"
        inputmode="numeric"
        autofocus
        enterkeyhint="enter"
      ></gds-input>
    </gds-flex>
  `,
}

/**
 * The `disabled` property can be set to disable the input field.
 *
 * **@property disabled** - Disables the input field.
 *
 * ```html
 *  <gds-input disabled></gds-input>
 * ```
 */
export const Disabled: Story = {
  ...DefaultParams,
  name: 'Disabled',
  render: () => html`
    <gds-flex gap="xl">
      <gds-input label="Label" disabled supporting-text="Support text">
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-input>
      <gds-input
        label="Label"
        disabled
        supporting-text="Support text"
        value="Disabled with value"
        clearable
      >
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-input>
    </gds-flex>
  `,
}

/**
 * The `charCounterCallback` property can be used to customize the character counter badge.
 *
 * Check the [story source](https://github.com/seb-oss/green/blob/main/libs/core/src/components/input/input.stories.ts) to see the full code for this example, as Storybook strips away property assignments in the code examples.
 */
export const CustomCounterBadge: Story = {
  ...DefaultParams,
  name: 'Custom counter badge',
  render: () => html`
      <gds-input
        label="Label"
        maxlength="100"
        .charCounterCallback=${(inp: GdsInput) => {
          let badgeType: GdsBadge['variant'] = 'positive'
          if (inp.value) {
            switch (inp.value.length % 5) {
              case 0:
                badgeType = 'positive'
                break
              case 1:
                badgeType = 'negative'
                break
              case 2:
                badgeType = 'notice'
                break
              case 3:
                badgeType = 'warning'
                break
              case 4:
                badgeType = 'information'
                break
            }
          }
          return [inp.value!.length, badgeType] as const
        }}
      >
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-input>
    </gds-flex>
  `,
}
