import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import { argTablePropsFor } from '../../../.storybook/argTableProps.ts'

import './index.ts'
import '../flex/index.ts'
import '../dropdown/index.ts'

/**
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/year-picker)
 *
 * The year picker component is a visual representation of a many years that allows users
 * to select a year. Keys to use: arrow-keys, home, and end to focus a year
 * and enter or space to select it.
 */
const meta: Meta = {
  title: 'Components/Year picker',
  component: 'gds-year-picker',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-year-picker'),
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
  args: {},
}

export const Default: Story = {
  ...DefaultParams,
  args: {
    label: 'YearPicker',
  },
}

/**
 * Use the `no-current-year` attribute so the month right
 * now does not have a outer ring around it.
 */
export const NoCurrentMonth: Story = {
  ...DefaultParams,
  name: 'No current month',
  render: (args) => html` <gds-year-picker no-current-year></gds-year-picker> `,
}

/**
 * Use the `small` attribute to use a smaller and condenced styling.
 */
export const Small: Story = {
  ...DefaultParams,
  render: (args) => html` <gds-year-picker size="small"></gds-year-picker> `,
}

/**
 * Use `min` and `max` attributes to limit the months you can choose from.
 * The rest is greyed out. Remember that by default it uses the current year.
 */
export const MinAndMax: Story = {
  ...DefaultParams,
  name: 'Min and max',
  render: (args) => html`
    <gds-year-picker min="2023-01-01" max="2032-01-01"></gds-year-picker>
  `,
}

/**
 * Use `hide-extraneous-years` in combination with `min` and `max` attributes
 * to to fully hide the non-selectable years.
 */
export const Hide: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-year-picker
      min="2023-01-01"
      max="2032-01-01"
      hide-extraneous-years
    ></gds-year-picker>
  `,
}

/*
/ **
 * Use `focusedYear` or `focusedDate` attributes to show a different year from the
 * current one. Good to use if the dates are limited to other than the current year.
 * Or is used in combination with the year-picker.
 * /
export const FocusedYearDate: Story = {
  ...DefaultParams,
  name: 'Focused year or date',
  render: (args) => html`
    <gds-month-picker
      focusedYear="2024"
      focusedDate="2024-06-01"
      min="2024-02-01"
      max="2024-10-30"
    ></gds-month-picker>
  `,
}

export const OutsideMinMax: Story = {
  ...DefaultParams,
  name: 'Outside the min max',
  render: (args) => html`
    <gds-month-picker
      focusedYear="2024"
      focusedDate="2024-12-01"
      min="2024-01-01"
      max="2024-06-01"
    ></gds-month-picker>
  `,
}

// export const Disabled: Story = {
//   ...DefaultParams,
//   render: (args) => html`
//     <gds-month-picker minMonth="2" maxMonth="9"></gds-month-picker>
//   `,
// }

*/
