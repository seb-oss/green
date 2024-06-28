import { html } from 'lit'
import type { Meta, StoryObj } from '@storybook/web-components'
import './index.ts'
import '../dropdown/index.js'

// Needed for components that only have 2016 style so far
import { registerTransitionalStyles } from '../../transitional-styles.ts'
registerTransitionalStyles()

/**
 * [Source code](https://github.com/sebgroup/green/tree/main/libs/core/src/components/calendar)
 *
 * The calendar component is a visual representation of a calendar that allows users to select a date.
 */
const meta: Meta = {
  title: 'Components/Calendar',
  component: 'gds-calendar',
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
  args: {},
}

export const Basic: Story = {
  ...DefaultParams,
  args: {
    label: 'Calendar',
  },
}

/**
 * This is an example of a simple inline datepicker using the calendar
 * component. It demonstrates how to control the view in the calendar,
 * how to react to changes and how to customize dates.
 *
 * This example is written in plain vanilla js/html, but you can adapt it to your
 * framework of choice.
 */
export const Usage: Story = {
  ...DefaultParams,
  render: (args) => html`
    <div style="width: 320px">
      <gds-grid gap="m">
        <gds-dropdown id="year" label="Year" size="small">
          <gds-option value="2024">2024</gds-option>
          <gds-option value="2025">2025</gds-option>
          <gds-option value="2026">2026</gds-option>
        </gds-dropdown>
        <gds-dropdown id="month" max-height="200" label="Month" size="small">
          <gds-option value="0">Jan</gds-option>
          <gds-option value="1">Feb</gds-option>
          <gds-option value="2">Mar</gds-option>
          <gds-option value="3">Apr</gds-option>
          <gds-option value="4">May</gds-option>
          <gds-option value="5">Jun</gds-option>
          <gds-option value="6">Jul</gds-option>
          <gds-option value="7">Aug</gds-option>
          <gds-option value="8">Sep</gds-option>
          <gds-option value="9">Oct</gds-option>
          <gds-option value="10">Nov</gds-option>
          <gds-option value="11">Dec</gds-option>
        </gds-dropdown>
      </gds-grid>
      <gds-calendar id="cal" label="Calendar"></gds-calendar>
      <div>
        Selected date:
        <span id="selected-date" style="font-weight: bold"></span>
      </div>
    </div>
    <script>
      const cal = document.getElementById('cal')
      const year = document.getElementById('year')
      const month = document.getElementById('month')

      const customizedDates = [
        {
          date: new Date('2024-06-04'),
          color: 'var(--intent-danger-background)',
        },
        {
          date: new Date('2024-06-06'),
          color: 'var(--intent-danger-background)',
          indicator: 'dot',
        },
        {
          date: new Date('2024-07-06'),
          disabled: true,
        },
      ]

      function setYear(e) {
        cal.focusedYear = e.target.value
      }

      function setMonth(e) {
        cal.focusedMonth = e.target.value
      }

      function onCalFocusChange(e) {
        year.value = String(e.target.focusedYear)
        month.value = String(e.target.focusedMonth)
      }

      function onCalChange() {
        const selectedDate = cal.value
        document.getElementById('selected-date').innerText =
          selectedDate.toDateString()
      }

      cal.addEventListener('gds-date-focused', onCalFocusChange)
      cal.addEventListener('change', onCalChange)
      cal.customizedDates = customizedDates

      year.addEventListener('change', setYear)
      year.value = String(cal.focusedYear)

      month.addEventListener('change', setMonth)
      month.value = String(cal.focusedMonth)
    </script>
  `,
}
