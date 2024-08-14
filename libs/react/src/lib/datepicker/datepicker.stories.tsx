import React from 'react'
import Datepicker from './datepicker'
import { Meta, StoryObj } from '@storybook/react'

type Story = StoryObj<typeof Datepicker>

/**
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
 * To show that the `Datepicker` is invalid, set the `invalid` props to true.
 *
 * If you want a custom error message, add a child to the `Datepicker` that should be put into the `slot="message"`
 */

export const Invalid: Story = {
  args: {
    label: 'Choose date',
    invalid: true,
    value: new Date(),
    testId: 'test',
  },
  render: (args) => {
    console.log(args)
    return (
      <Datepicker {...args}>
        <span slot="message">My custom message</span>
      </Datepicker>
    )
  },
}
