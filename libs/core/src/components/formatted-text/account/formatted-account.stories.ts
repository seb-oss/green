import type { Meta, StoryObj } from '@storybook/web-components'

import './formatted-account'

import { html } from 'lit'

import { argTablePropsFor } from '../../../../.storybook/argTableProps'
import { GdsFormattedAccount } from './formatted-account.component'

/**
 * `gds-text` extends `gds-div` and adds the ability to set an internal tag name, such as `h1`, `h2`, etc. It also adds line clamping and text decoration properties.
 *
 * Style expression properties apply to the outer element unless otherwise specified.
 *
 * @beta
 */
const meta: Meta = {
  title: 'Components/Formatted Text/Accounts',
  component: 'gds-formatted-account',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-formatted-account'),
  },
}

export default meta
type Story = StoryObj<GdsFormattedAccount>

const DefaultParams: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
    controls: { expanded: true },
  },
  args: {
    account: '54400023423',
  },
}

export const Default: Story = {
  ...DefaultParams,
  name: 'SEB Account',
  render: (args) =>
    html`<gds-formatted-account
      .account=${args.account}
    ></gds-formatted-account>`,
}
