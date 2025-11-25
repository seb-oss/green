import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components-vite'

import { argTablePropsFor } from '../../../../.storybook/argTableProps.ts'
import { GdsSensitiveDate } from './index.ts'

import './index.ts'

import { dateTimeFormats } from '../../formatted-text/formatters.ts'

/**
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/date)
 *
 * GdsSensitiveDate displays a formatted date and optionally hides it using a blur effect
 * when the 'hide' property is set to true.
 *
 * @status beta
 *
 */
const meta: Meta = {
  title: 'Components/Sensitive/Date',
  component: 'gds-sensitive-date',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-sensitive-date'),
    format: {
      control: { type: 'select' },
      options: Object.keys(dateTimeFormats),
    },
  },
}

export default meta
type Story = StoryObj<GdsSensitiveDate>

const DefaultParams: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
  },
  args: {
    hide: true,
    value: new Date(2025, 1, 25, 14, 17, 30),
    locale: 'sv-SE',
    format: 'dateOnlyNumbers',
  },
}

export const Default: Story = {
  ...DefaultParams,
  render: (args) =>
    html`<gds-sensitive-date
      .hide=${args.hide}
      .value=${args.value}
      .locale=${args.locale}
      .format=${args.format}
    ></gds-sensitive-date>`,
}
