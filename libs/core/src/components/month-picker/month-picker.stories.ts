import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import { argTablePropsFor } from '../../../.storybook/argTableProps.ts'

import './index.ts'
import '../popover/index.ts'
import '../button/index.ts'
import '../icon/icons/calendar.ts'

/**
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/month-picker)
 *
 * The month picker component is a visual representation of a year that allows users
 * to select a month. Keys to use: arrow-keys, home, and end to focus a month
 * and enter or space to select it.
 */
const meta: Meta = {
  title: 'Components/Month picker',
  component: 'gds-month-picker',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-month-picker'),
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
    label: 'MonthPicker',
  },
}

/**
 * Use the `no-current-month` attribute so the month right
 * now does not have a outer ring around it.
 */
export const NoCurrentMonth: Story = {
  ...DefaultParams,
  name: 'No current month',
  render: (args) => html`
    <gds-month-picker no-current-month></gds-month-picker>
  `,
}

/**
 * Use the `small` attribute to use a smaller and condenced styling.
 */
export const Small: Story = {
  ...DefaultParams,
  render: (args) => html` <gds-month-picker size="small"></gds-month-picker> `,
}

/**
 * Use the `short-month-text` attribute to only disply first
 * three characters of the month.
 */
export const Short: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-month-picker short-month-text></gds-month-picker>
  `,
}

/**
 * Use both `small` and `short-month-text` attributes to get
 * the smallest version.
 */
export const ShortAndSmall: Story = {
  ...DefaultParams,
  name: 'Short and small',
  render: (args) => html`
    <gds-month-picker size="small" short-month-text></gds-month-picker>
  `,
}

/**
 * Use the the `month-number` attribute to show the month number instead of the name.
 */
export const MonthNumber: Story = {
  ...DefaultParams,
  name: 'Month number',
  render: (args) => html` <gds-month-picker month-number></gds-month-picker> `,
}

/**
 * Use `min` and `max` attributes to limit the months you can choose from.
 * The rest is greyed out. Remember that by default it uses the current year.
 */
export const MinAndMax: Story = {
  ...DefaultParams,
  name: 'Min and max',
  render: (args) => html`
    <gds-month-picker min="2025-03-01" max="2025-09-30"></gds-month-picker>
  `,
}

/**
 * Use `hide-extraneous-months` in combination with `min` and `max` attributes
 * to to fully hide the non-selectable months.
 */
export const Hide: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-month-picker
      min="2025-03-01"
      max="2025-09-30"
      hide-extraneous-months
    ></gds-month-picker>
  `,
}

/**
 * Use `focusedYear` or `focusedDate` attributes to show a different year from the
 * current one. Good to use if the dates are limited to other than the current year.
 * Or is used in combination with the year-picker.
 */
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

/**
 * Example of a button that opens up the month-picker.
 */
export const Popover: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-popover id="pop">
      <gds-button rank="secondary" slot="trigger">
        <span id="selected-month">Choose a month</span>
        <gds-icon-calendar slot="trail"></gds-icon-calendar>
      </gds-button>
      <div style="padding: 1rem 0 0 1.5rem">Choose a month</div>
      <gds-month-picker id="monthp"> </gds-month-picker>
    </gds-popover>
    <script>
      var monthp = document.getElementById('monthp')
      function onMonthChange() {
        const selectedDate = monthp.value
        document.getElementById('selected-month').innerText =
          selectedDate.toLocaleString('default', { month: 'long' })
        document.getElementById('pop').open = false
      }
      monthp.addEventListener('change', onMonthChange)
    </script>
  `,
}

/*export const OutsideMinMax: Story = {
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
}*/

// export const Disabled: Story = {
//   ...DefaultParams,
//   render: (args) => html`
//     <gds-month-picker minMonth="2" maxMonth="9"></gds-month-picker>
//   `,
// }
