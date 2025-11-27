import React from 'react'
import { Meta, StoryObj } from '@storybook/react-vite'

import { GdsAlert } from '../../../../../dist/libs/core/src/components/alert/alert.component.js'
import Datepicker from './datepicker'

try {
  window.customElements.define('gds-alert', GdsAlert)
} catch (e) {}

type Story = StoryObj<typeof Datepicker>

/**
 * <gds-alert variant="notice">**Note:** This version of Datepicker is deprecated. Please use the `gds-datepicker` web component from green-core instead.</gds-alert>
 *
 * Date pickers are used when users need to enter a date. The user can enter the date as text, but the date picker also allows the user to select the date in a visual representation of a calendar.
 */
const meta: Meta<typeof Datepicker> = {
  title: 'Components/Datepicker',
  component: Datepicker,
  argTypes: {},
  parameters: {
    componentIds: ['component-datepicker'],
  },
  tags: ['autodocs'],
}

export default meta

export const Default: Story = {
  args: {
    label: 'Choose date',
  },
}

/**
 * To handle validation of the `Datepicker`, you can pass a `validator` object to the `Datepicker` component. The `validator` object should have a `validate` function that takes the `Datepicker` element as an argument and returns an array of the validity state and an optional validation message.
 *
 * ```tsx
 * <Datepicker validator={{ validator: (el: GdsDatepicker) => {
 *     // Put your custom validation logic
 *      if (el.value !== 'correctValue') {
 *        // And return a validator array
 *        return [
 *            {
 *              badInput: true,
 *              customError: true,
 *              patternMismatch: true,
 *              rangeOverflow: true,
 *              rangeUnderflow: true,
 *              stepMismatch: true,
 *              tooLong: true,
 *              tooShort: true,
 *              typeMismatch: true,
 *              valid: false,
 *              valueMissing: true,
 *            },
 *            'My custom validation message',
 *      ] : [ValidityState, string]
 * }}} />
 *
 *
 * ```
 *
 * For more information on validation in Green Core, see the [Form Validation](https://storybook.seb.io/latest/core/?path=/docs/docs-form-validation-documentation--docs) example.
 */
export const Validation: Story = {
  args: {
    label: 'Choose date',
    validator: {
      validate: (el: GdsDatePicker) => {
        /** Put your custom validation logic */
        if (el.value !== 'correctValue') {
          /** And return a validator array */
          return [
            {
              badInput: true,
              customError: true,
              patternMismatch: true,
              rangeOverflow: true,
              rangeUnderflow: true,
              stepMismatch: true,
              tooLong: true,
              tooShort: true,
              typeMismatch: true,
              valid: false,
              valueMissing: true,
            },
            'My custom validation message',
          ]
        }
      },
      disabled: true,
    },
    value: new Date(),
    testId: 'test',
    ref: React.createRef(),
  },
  render: (args) => <Datepicker {...args} />,
}
