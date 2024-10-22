import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import './index.ts'
import '../badge/index.ts'
import '../flex/index.ts'
import '../divider/index.ts'
import '../icon/icons/credit-card.ts'
import '../icon/icons/magnifying-glass.ts'

/**
 *
 * Textareas are used for longer multiline text inputs, such as comments or descriptions.<br>
 * They can be used in forms, dialogs, and data tables.
 * The `gds-textarea` component is a wrapper around the native textarea element and provides a consistent look and feel across browsers. It has 4 rows by default and it resizes vertically to fit the content as the user types.
 *
 * Some features of the Textarea include:
 * - Built-in support for form validation
 * - Slots for `lead` and `trail` icons
 * - `Supporting` and `Extended` text
 * - `Clearable` input fields
 * - `Length` validation
 * - `Disabled` state
 * - Custom number of `Rows`
 *
 * @status beta
 *
 */
const meta: Meta = {
  title: 'Components/Textarea',
  component: 'gds-textarea',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

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
    label: 'Label text',
  },
}

export const Default: Story = {
  ...DefaultParams,
  name: 'Default',
  render: () => html`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label"
        supporting-text="Supporting text."
      ></gds-textarea>
    </gds-flex>
  `,
}

/**
 *
 *
 * **@slot lead** - Slot for an icon or other content to be placed at the beginning of the `gds-textarea` field.
 *
 * ```html
 *  <gds-textarea label="Lead Icon">
 *    <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
 * </gds-textarea>```
 * */
export const Lead: Story = {
  ...DefaultParams,
  name: 'Slot: Lead',
  render: () => html`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea label="Lead Icon">
        <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
      </gds-textarea>
    </gds-flex>
  `,
}

/**
 *
 * **@slot trail** - Slot for an icon or other content to be placed at the end of the textarea field.
 *
 * ```html
 *  <gds-textarea label="Trail Icon">
 *    <gds-badge variant="information" slot="trail">USD</gds-badge>
 * </gds-textarea>```
 * */
export const Trail: Story = {
  ...DefaultParams,
  name: 'Slot: Trail',
  render: () => html`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label"
        supporting-text="Label support text"
        value="Example value"
        clearable
      >
        <gds-badge variant="information" slot="trail">SEK</gds-badge>
      </gds-textarea>
    </gds-flex>
  `,
}

/**
 * The `length` property can be set to a number to limit the number of characters that can be entered into the textarea field.<br> A badge will be displayed, updating as the textarea approaches the character limit.
 *
 * **@property maxLength** - The maximum number of characters that can be entered into the textarea field.
 *
 * ```html
 *  <gds-textarea maxLength="20"></gds-textarea>
 * ```
 * */
export const Length: Story = {
  ...DefaultParams,
  name: 'Length',
  render: () => html`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label"
        supporting-text="Label support text"
        value="Example value"
        maxLength="20"
        clearable
      >
      </gds-textarea>
    </gds-flex>
  `,
}

/**
 * Minimum number of rows to display in the textarea is `4` by default. <br>
 * You can specify the number of rows to display in the textarea using the `rows` attribute.
 *
 * @property rows - The number of rows to display in the textarea.
 *
 * ```html
 *  <gds-textarea rows="8"></gds-textarea>
 * ```
 **/
export const Rows: Story = {
  ...DefaultParams,
  name: 'Rows',
  render: () => html`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label"
        supporting-text="Label support text"
        value="Example value with 8 rows"
        clearable
        rows="8"
      >
      </gds-textarea>
    </gds-flex>
  `,
}

/**
 * The `resize` property is set to `auto` by default, allowing the user to resize the textarea.
 *
 * To disable the resize functionality, set the `resize` property to `false`.
 *
 * When the `resize` property is set to `auto`, a resize handle will appear at the bottom center of the textarea when the user hovers over it. Dragging this handle will resize the textarea.
 *
 * The textarea's size is adjustable based on the `rows` attribute and the content within the textarea.
 *
 * @property resize - Controls whether and how the textarea can be resized by the user.
 *
 * ```html
 *  <gds-textarea resize="false"></gds-textarea>
 * ```
 **/
export const Resize: Story = {
  ...DefaultParams,
  name: 'Resize',
  render: () => html`
    <gds-flex gap="xl" width="800px">
      <gds-flex flex-direction="column" flex="1" gap="l">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Resize: False</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          resize="false"
        >
        </gds-textarea>
      </gds-flex>
      <gds-flex flex-direction="column" flex="1" gap="l">
        <gds-flex flex-direction="column" gap="s">
          <gds-text>Resize: True</gds-text>
          <gds-divider opacity="0.2"></gds-divider>
        </gds-flex>
        <gds-textarea label="Label" supporting-text="Label support text">
        </gds-textarea>
      </gds-flex>
    </gds-flex>
  `,
}

/**
 * When the `clearable` property is set, a clear button is added, allowing users to quickly clear the text.
 *
 * @property clearable - Enables the clear button for the textarea field.
 *
 * ```html
 *  <gds-textarea label="Label text" value="Clear this text" clearable></gds-textarea>
 * ```
 */
export const Clearable: Story = {
  ...DefaultParams,
  name: 'Clearable',
  render: () => html`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label text"
        value="Clear this text"
        clearable
      ></gds-textarea>
    </gds-flex>
  `,
}

/**
 * The `supporting-text` property can be set to a string to provide additional information about the textarea field.
 *
 * **@property supporting-text** - Additional information about the textarea field.
 *
 * ```html
 *   <gds-textarea label="Label text" supporting-text="Supporting text"></gds-textarea>
 * ```
 */
export const SupportingText: Story = {
  ...DefaultParams,
  name: 'Supporting Text',
  render: () => html`
    <gds-flex flex-direction="column" gap="xl" width="320px">
      <gds-textarea
        label="Label"
        supporting-text="Supporting text"
      ></gds-textarea>
    </gds-flex>
  `,
}

/**
 * The `extended-supporting-text` slot can be used to provide extended information about the textarea field.<br>
 * The slot will show by default when the `show-extended-supporting-text` property is set.<br>
 * If not specified, the slot will be hidden and a companion icon will be displayed to indicate that more information is available.
 *
 * **@slot extended-supporting-text** - Extended information about the textarea field.
 *
 * ```html
 * <gds-textarea label="Label text" supporting-text="Supporting text">
 *   <span slot="extended-supporting-text">Extended supporting text</span>
 * </gds-textarea>
 * ```
 *
 * **@property show-extended-supporting-text** - Shows the extended supporting text.
 *
 * ```html
 * <gds-textarea show-extended-supporting-text></gds-textarea>
 * ```
 */
export const ExtendedSupportingText: Story = {
  ...DefaultParams,
  name: 'Extended Supporting Text',
  render: () => html`
    <gds-flex gap="xl" width="800px">
      <gds-textarea label="Label text" supporting-text="Supporting text">
        <span slot="extended-supporting-text"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </gds-textarea>
      <gds-textarea
        label="Label text"
        supporting-text="Supporting text"
        show-extended-supporting-text
      >
        <span slot="extended-supporting-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </gds-textarea>
    </gds-flex>
  `,
}

/**
 * Textarea has built-in support for form validation.<br>The validation feature is built on top of the browsers native validation features, using `ElementInternals` and `Constraint Validation API`.
 *
 * Validation is configured by adding a validator to a form element.<br> A validator is an object that implements the `GdsValidator` interface:
 *
 * ```html
 * <gds-textarea
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
 *  }}></gds-textarea>
 * ```
 * **@property invalid** - Indicates that the textarea field contains an error.
 *
 * ```html
 * <gds-textarea invalid></gds-textarea>
 * ```
 */
export const Validation: Story = {
  ...DefaultParams,
  name: 'Validation',
  render: () => html`
    <gds-flex flex-direction="column" width="800px">
      <gds-flex gap="xl">
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          value=" "
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
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
          <span slot="extended-supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </gds-textarea>
        <gds-textarea
          label="Label"
          supporting-text="Label support text"
          value="Incorrect value"
          maxLength="12"
          clearable
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
                  'The value must be 12 characters long. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                ]
            },
          }}
          clearable
        >
          <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
        </gds-textarea>
      </gds-flex>
    </gds-flex>
  `,
}

/**
 * The `disabled` property can be set to disable the textarea field.
 *
 * **@property disabled** - Disables the textarea field.
 *
 * ```html
 *  <gds-textarea disabled></gds-textarea>
 * ```
 */
export const Disabled: Story = {
  ...DefaultParams,
  name: 'Disabled',
  render: () => html`
    <gds-flex gap="xl" width="800px">
      <gds-textarea label="Label" disabled supporting-text="Support text">
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-textarea>
      <gds-textarea
        label="Label"
        disabled
        supporting-text="Support text"
        value="Disabled with value"
        clearable
      >
        <gds-icon-credit-card slot="lead"></gds-icon-credit-card>
      </gds-textarea>
    </gds-flex>
  `,
}
