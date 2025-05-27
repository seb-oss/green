import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import { argTablePropsFor } from '../../../.storybook/argTableProps.ts'

import './index.ts'
import '../flex/index.ts'
import '../dropdown/index.ts'

/**
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/month-picker)
 *
 * The month picker component is a visual representation of a year that allows users to select a month.
 */
const meta: Meta = {
  title: 'Components/Month picker',
  component: 'gds-month-picker',
  parameters: {
    layout: 'centered',
    disabledWeekends: true,
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

export const NoCurrentMonth: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-month-picker no-current-month></gds-month-picker>
  `,
}

export const Small: Story = {
  ...DefaultParams,
  render: (args) => html` <gds-month-picker size="small"></gds-month-picker> `,
}

export const Short: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-month-picker short-month-text></gds-month-picker>
  `,
}

export const ShortAndSmall: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-month-picker size="small" short-month-text></gds-month-picker>
  `,
}

export const Number: Story = {
  ...DefaultParams,
  render: (args) => html` <gds-month-picker month-number></gds-month-picker> `,
}

// export const Disabled: Story = {
//   ...DefaultParams,
//   render: (args) => html`
//     <gds-month-picker minMonth="2" maxMonth="9"></gds-month-picker>
//   `,
// }

export const Disabled: Story = {
  ...DefaultParams,
  render: (args) => html`
    <gds-month-picker min="2025-03-01" max="2025-09-30"></gds-month-picker>
  `,
}

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

// export const Hide: Story = {
//   ...DefaultParams,
//   render: (args) => html`
//     <gds-month-picker
//       minMonth="2"
//       maxMonth="9"
//       hide-extraneous-months
//     ></gds-month-picker>
//   `,
// }

// export const MoreYears: Story = {
//   ...DefaultParams,
//   render: (args) => html`
//     <gds-month-picker minMonth="-1" maxMonth="-1"></gds-month-picker>
//   `,
// }
