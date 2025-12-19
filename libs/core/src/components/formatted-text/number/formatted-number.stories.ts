import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components-vite'

import { argTablePropsFor } from '../../../../.storybook/argTableProps'
import { GdsFormattedNumber } from './formatted-number.component'
import { numberFormats } from './number-formatter'

import './formatted-number'
import '../../flex'

/**
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/formatted-text/number)
 *
 * `gds-formatted-number` extends `gds-text` and formats the number to the desired format.
 *
 * @beta
 */
const meta: Meta = {
  title: 'Components/Formatted text/Number',
  component: 'gds-formatted-number',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-formatted-number'),
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
type Story = StoryObj<GdsFormattedNumber>

const DefaultParams: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
    controls: { expanded: true },
  },
  args: {
    locale: 'sv-SE',
    value: 1234.5,
  },
}

export const Default: Story = {
  ...DefaultParams,
  name: 'Default',
  render: (args) =>
    html`<gds-flex gap="m" flex-direction="column">
      <gds-formatted-number
        .value=${args.value}
        .locale=${args.locale}
        .currency=${args.currency}
        .decimals=${args.decimals}
      ></gds-formatted-number
      ><gds-formatted-number .locale=${args.locale} .currency=${args.currency}
        >${args.value}</gds-formatted-number
      ></gds-flex
    >`,
}

const currencies = ['SEK', 'EUR']

export const Currencies: Story = {
  ...DefaultParams,
  name: 'Currencies',
  render: (args) =>
    html`<gds-flex flex-direction="column" gap="m">
      ${currencies.map(
        (currency) =>
          html`<gds-flex gap="l" justify-content="space-between">
              <gds-text>${currency}:</gds-text>
              <gds-formatted-number
                .value=${args.value}
                .locale=${args.locale}
                .currency=${currency}
                .decimals=${args.decimals}
              ></gds-formatted-number>
            </gds-flex>

            <gds-divider></gds-divider>`,
      )}
    </gds-flex>`,
}

const decimals = [0, 2, 4]

export const Decimals: Story = {
  ...DefaultParams,
  name: 'Decimals',
  render: (args) =>
    html`<gds-flex flex-direction="column" gap="m">
      ${decimals.map(
        (currency) =>
          html`<gds-flex gap="l" justify-content="space-between">
              <gds-text>${currency}:</gds-text>
              <gds-formatted-number
                .value=${args.value}
                .locale=${args.locale}
                .currency=${args.currency}
                .decimals=${decimals}
              ></gds-formatted-number>
            </gds-flex>

            <gds-divider></gds-divider>`,
      )}
    </gds-flex>`,
}
