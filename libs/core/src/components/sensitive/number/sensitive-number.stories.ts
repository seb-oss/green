import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components-vite'

import { argTablePropsFor } from '../../../../.storybook/argTableProps.ts'
import { numberFormats } from '../../formatted-text/formatters.ts'
import { Default as formattedNumberDefault } from '../../formatted-text/number/formatted-number.stories.ts'
import { GdsSensitiveNumber } from './index.ts'

import './index.ts'

/**
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/number)
 *
 * GdsSensitiveNumber displays a formatted number and optionally hides it using a blur effect
 * when the 'hide' property is set to true.
 *
 * @status beta
 *
 */
const meta: Meta = {
  title: 'Components/Sensitive/Number',
  component: 'gds-sensitive-number',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-sensitive-number'),
    format: {
      control: { type: 'select' },
      options: Object.keys(numberFormats),
    },
    currency: {
      type: 'string',
    },
    decimals: {
      type: 'number',
    },
  },
}

export default meta
type Story = StoryObj<GdsSensitiveNumber>

const DefaultParams: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
  },
  args: {
    ...formattedNumberDefault.args,
    hide: true,
  },
}

export const Default: Story = {
  ...DefaultParams,
  render: (args) =>
    html`<gds-sensitive-number
      .hide=${args.hide}
      .value=${args.value}
      .locale=${args.locale}
      .currency=${args.currency}
      .decimals=${args.decimals}
    ></gds-sensitive-number>`,
}
