import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import { argTablePropsFor } from '../../../.storybook/argTableProps.ts'

import './index.ts'
import '../popover/index.ts'
import '../button/index.ts'
import '../icon/icons/calendar.ts'
import '../icon/icons/chevron-left.ts'
import '../icon/icons/chevron-right.ts'
import '../flex/index.ts'

/**
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/yearpicker)
 *
 * The year picker component is a visual representation of a many years that allows users
 * to select a year. Keys to use: arrow-keys, home, and end to focus a year
 * and enter or space to select it.
 */
const meta: Meta = {
  title: 'Components/Yearpicker',
  component: 'gds-yearpicker',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-yearpicker'),
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
    label: 'Yearpicker',
  },
}

/**
 * Use the `no-current-year` attribute so the month right
 * now does not have a outer ring around it.
 */
export const NoCurrentMonth: Story = {
  ...DefaultParams,
  name: 'No current month',
  render: (args) => html` <gds-yearpicker no-current-year></gds-yearpicker> `,
}

/**
 * Use the `small` attribute to use a smaller and condenced styling.
 */
export const Small: Story = {
  ...DefaultParams,
  render: (args) => html` <gds-yearpicker size="small"></gds-yearpicker> `,
}

/**
 * Use `min` and `max` attributes to limit the months you can choose from.
 * The rest is greyed out. Note that by default it uses from the current year -10
 * to current year +10 years.
 */
export const MinAndMax: Story = {
  ...DefaultParams,
  name: 'Min and max',
  render: (args) => html`
    <gds-yearpicker min="2023-01-01" max="2032-01-01"></gds-yearpicker>
  `,
}

/**
 * Use `hide-extraneous-years` in combination with `min` and `max` attributes
 * to to fully hide the non-selectable years.
 */
export const Hide: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-yearpicker
      min="2023-01-01"
      max="2032-01-01"
      hide-extraneous-years
    ></gds-yearpicker>
  `,
}

/**
 * Use `columns` and `rows` to override the default 5x5 cell table.
 */
export const LessCells: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-yearpicker columns="4" rows="3"></gds-yearpicker>
  `,
}

/**
 * Example of choosing a birth year.
 */
export const BirthYear: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-yearpicker
      min="1900-01-01"
      max="${new Date().toISOString().split('T')[0]}"
    ></gds-yearpicker>
  `,
}

/**
 * Example of a button that opens up the yearpicker.
 */
export const Popover: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-popover id="pop">
      <gds-button rank="secondary" slot="trigger">
        <span id="selected-year">Choose a year</span>
        <gds-icon-calendar slot="trail"></gds-icon-calendar>
      </gds-button>
      <div style="padding: 1rem 0 0 1.5rem">Choose a year</div>
      <gds-yearpicker id="yearp"> </gds-yearpicker>
    </gds-popover>
    <script>
      var yearp = document.getElementById('yearp')
      function onYearChange() {
        const selectedDate = yearp.value
        document.getElementById('selected-year').innerText =
          selectedDate.getFullYear()
        document.getElementById('pop').open = false
      }
      yearp.addEventListener('change', onYearChange)
    </script>
  `,
}

/**
 * Use `change-years-controls` to show controls for selecting previous and next years.
 */
export const ChangeYear: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-yearpicker min="1950-01-01" max="2100-01-01" controls="always">
    </gds-yearpicker>
  `,
}

/**
 * Example of a button that opens up the yearpicker.
 */
export const PopoverChange: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-popover id="popchange">
      <gds-button rank="secondary" slot="trigger">
        <span id="selected-year2">Choose a year</span>
        <gds-icon-calendar slot="trail"></gds-icon-calendar>
      </gds-button>
      <gds-yearpicker
        id="yearp2"
        min="1950-01-01"
        max="2100-01-01"
        controls="ifneeded"
      >
      </gds-yearpicker>
    </gds-popover>
    <script>
      var yearp2 = document.getElementById('yearp2')
      function onYearChange2() {
        document.getElementById('selected-year2').innerText =
          yearp2.value.getFullYear()
        document.getElementById('popchange').open = false
      }
      yearp2.addEventListener('change', onYearChange2)
    </script>
  `,
}
