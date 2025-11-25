import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components-vite'

import { argTablePropsFor } from '../../../../.storybook/argTableProps.ts'
import { Default as formattedAccountDefault } from '../../formatted-text/account/formatted-account.stories.ts'
import { GdsSensitiveAccount } from './index.ts'

import './index.ts'

import { accountsFormats } from '../../formatted-text/formatters.ts'

/**
 * [Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)
 *
 * GdsSensitiveAccount displays a formatted account and optionally hides it using a blur effect
 * when the 'hide' property is set to true.
 *
 * @status beta
 *
 */
const meta: Meta = {
  title: 'Components/Sensitive/Account',
  component: 'gds-sensitive-account',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-sensitive-account'),
    format: {
      control: { type: 'select' },
      options: Object.keys(accountsFormats),
    },
  },
}

export default meta
type Story = StoryObj<GdsSensitiveAccount>

const DefaultParams: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
  },
  args: {
    ...formattedAccountDefault.args,
    hide: true,
  },
}

export const Default: Story = {
  ...DefaultParams,
  render: (args) =>
    html`<gds-sensitive-account
      .hide=${args.hide}
      .account=${args.account}
    ></gds-sensitive-account>`,
}
