import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components-vite'

import { argTablePropsFor } from '../../../.storybook/argTableProps.ts'

import './index.ts'

/**
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/datepicker)
 * &nbsp;|&nbsp;
 * [Usage guidelines](https://designlibrary.sebgroup.com/components/datepicker)
 *
 * The datepicker allows users to select a date.
 *
 * The datepicker in Green Core mimics the behaviour of the native date input element as it is
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
  title: 'Components/Datepicker',
  component: 'gds-datepicker',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-datepicker'),
  },
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
    supportingText: 'Supporting text',
    innherHTML: `
      <span slot="extended-supporting-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </span>
      <gds-icon-books slot="lead"></gds-icon-books>
      `,
  },
}

export const Basic: Story = {
  ...DefaultParams,
}

/**
 * The date picker takes a `label` attribute for setting the label text, and
 * a `supporting-text` attribute for setting the supporting text below the label.
 *
 * When the value is changed by a user, a `change` event is fired.
 */
export const Usage: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-datepicker
      label="Supporting text"
      supporting-text="A supporting text can be added below the label"
      onchange="console.log(this.value)"
    >
    </gds-datepicker>
  `,
}

/**
 * Use the `show-week-numbers` attribute to show a week numbers column in the calendar view.
 */
export const WeekNumbers: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-datepicker label="Week numbers" show-week-numbers></gds-datepicker>
  `,
}

/**
 * Setting `min` and `max` date you can choose.
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
 * The date picker has two sizes: `small` and `large`. The default size is `large`.
 *
 * Optionally, the label can be hidden by using the `hide-label` attribute.
 */
export const InputFieldSize: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-datepicker
      label="A small input"
      hide-label
      size="small"
    ></gds-datepicker>
  `,
}

export const Invalid: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-datepicker label="Invalid date" aria-invalid="true"></gds-datepicker>
  `,
}

/**
 * Use the `show-week-numbers` attribute to show a week numbers column in the calendar view.
 */
export const DisabledField: Story = {
  ...DefaultParams,
  name: 'Disabled',
  render: (args) => html`
    <gds-datepicker
      label="Using min and max dates"
      min="2022-11-11"
      max="2024-02-20"
      disabled
    ></gds-datepicker>
  `,
}

/**
 * The selected date can be clearable by using the 'clearable` attribute (was default on before).
 */
export const Clearable: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-datepicker label="Clearable on" clearable></gds-datepicker>
  `,
}

/**
 * The today button can be hidden by using the `hide-today-button` attribute.
 */
export const Simplified: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-datepicker label="Today hidden" hide-today-button></gds-datepicker>
  `,
}

/**
 * An example with things turned on.
 */
export const Full: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-datepicker
      label="Label"
      supporting-text="Supporting text"
      clearable
      disabled-weekends
      show-week-numbers
    ></gds-datepicker>
  `,
}
