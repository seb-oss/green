import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components-vite'

import { argTablePropsFor } from '../../../../.storybook/argTableProps'
import { accountsFormats } from './account-formatter'
import { GdsFormattedAccount } from './formatted-account.component'

import './formatted-account'
import '../../flex'

/**
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/formatted-text/account)
 *
 * `gds-formatted-account` extends `gds-text` and formats the account to the desired format.
 *
 * @beta
 */
const meta: Meta = {
  title: 'Components/Formatted text/Accounts',
  component: 'gds-formatted-account',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-formatted-account'),
    format: {
      control: { type: 'select' },
      options: Object.keys(accountsFormats),
    },
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
    html`<gds-flex gap="m" flex-direction="column">
      <gds-formatted-account .account=${args.account}></gds-formatted-account>
      <gds-formatted-account>${args.account}</gds-formatted-account>
    </gds-flex>`,
}
