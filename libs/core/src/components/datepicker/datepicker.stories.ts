import { html } from 'lit'
import type { Meta, StoryObj } from '@storybook/web-components'
import './index.ts'

// Needed for components that only have 2016 style so far
import { registerTransitionalStyles } from '../../transitional-styles.ts'
registerTransitionalStyles()

/**
 * [Source code](https://github.com/sebgroup/green/tree/main/libs/core/src/components/datepicker)
 * &nbsp;|&nbsp;
 * [Usage guidelines](https://designlibrary.sebgroup.com/components/datepicker)
 *
 * Date pickers simplify the task of selecting a date in a visual representation of a calendar.
 * The date picker in Green Core mimics the behaviour of the native date input element as it is
 * implemented in Chromium browsers.
 *
 * The input field shows three parts of the date: the day, the month and the year. The user can
 * navigate between these parts using the arrow keys. The user can also navigate between the parts
 * by clicking on them or tabbing. When a part has focus, it can be changed using the arrow keys or
 * by typing a number.
 *
 * Clicking the calendar icon opens a popover with a calendar view where a date can be chosen.
 */
const meta: Meta = {
  title: 'Docs/Components/Datepicker',
  component: 'gds-datepicker',
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
    label: 'Pick a date',
  },
}

export const Basic: Story = {
  ...DefaultParams,
}

/**
 * The date picker takes a `label` attribute for setting the label text, and has two slots for adding
 * additional information.
 *
 * The `sub-label` slot sits between the label and the input, and the `message` slot sits below the
 * input. The `message` slot is used to display instructions and/or validation errors.
 *
 * When the value is changed by a user, a `change` event is fired.
 */
export const Usage: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-datepicker label="Using slots" onchange="console.log(this.value)">
      <span slot="sub-label">
        A sub-label can be added as additional description
      </span>
      <span slot="message">
        Instructive message. Will turn red if there is a validation error
      </span>
    </gds-datepicker>
  `,
}

/**
 * Use the `show-week-numbers` attribute to show a week numbers column in the calendar view.
 */
export const WeekNumbers: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-datepicker
      label="With week numbers"
      show-week-numbers
    ></gds-datepicker>
  `,
}

/**
 * Use the `show-week-numbers` attribute to show a week numbers column in the calendar view.
 */
export const MinMaxDates: Story = {
  ...DefaultParams,
  name: 'Min and max dates',
  render: (args) => html`
    <gds-datepicker
      label="Using min and max dates"
      min="2022-11-11"
      max="2024-02-20"
    ></gds-datepicker>
  `,
}

/**
 * Set the `disable-weekends` attribute to disable weekends (saturdays and sundays) in the calendar view.
 *
 * Additionally, `disabled-dates` can be used to disable specific dates.
 *
 * - When set via the `disabled-dates` attribute, this should be a comma-separated list of date strings that can be parsed by the Javscript `Date()` constructor.
 * - When set via the `disabledDates` property, it should be an array of Javascript `Date` objects.
 */
export const Disabled: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-datepicker
      label="Disabled weekends"
      disabled-weekends
      disabled-dates="2024-03-08, 2024-04-12, 2024-03-18, 2024-03-19"
    ></gds-datepicker>
  `,
}

/**
 * The date picker has two sizes: `small` and `medium`. The default size is `medium`.
 *
 * Optionally, the label can be hidden by using the `hide-label` attribute.
 */
export const InputFieldSize: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-datepicker
      label="A small datepicker"
      hide-label
      size="small"
    ></gds-datepicker>
  `,
}
