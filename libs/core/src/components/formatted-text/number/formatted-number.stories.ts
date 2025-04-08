import type { Meta, StoryObj } from '@storybook/web-components'

import './formatted-number'
import '../../card'
import '../../container'
import '../../flex'
import '../../divider'

import { html } from 'lit'

import { argTablePropsFor } from '../../../../.storybook/argTableProps'
import { GdsFormattedNumber } from './formatted-number.component'

/**
 * `gds-text` extends `gds-div` and adds the ability to set an internal tag name, such as `h1`, `h2`, etc. It also adds line clamping and text decoration properties.
 *
 * Style expression properties apply to the outer element unless otherwise specified.
 *
 * @beta
 */
const meta: Meta = {
  title: 'Components/Formatted Text/Number',
  component: 'gds-formatted-number',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-formatted-number'),
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

/**
 * The `tag` property controls the inner element tag name.
 *
 * Example: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`, `span`, `em`, `mark`, `strong`, `small` etc.
 *
 * Depending on which tag you use, different default styles will be applied. Style can be overridden using the `font-size`, `font-weight` and other style expression properties.
 *
 * The default tag is `span` and the default size is `body-m`
 */

export const Default: Story = {
  ...DefaultParams,
  name: 'Default',
  render: (args) =>
    html`<gds-formatted-number
      .value=${args.value}
      .locale=${args.locale}
    ></gds-formatted-number>`,
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
              ></gds-formatted-number>
            </gds-flex>

            <gds-divider></gds-divider>`,
      )}
    </gds-flex>`,
}
