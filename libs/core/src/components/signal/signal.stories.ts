import type { Meta, StoryObj } from '@storybook/web-components'

import './signal'
import '../fab'
import '../flex'

import { html } from 'lit'

import { argTablePropsFor } from '../../../.storybook/argTableProps'

const meta: Meta = {
  title: 'Components/Signal',
  component: 'gds-signal',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-signal'),
  },
}

export default meta
type Story = StoryObj

const DefaultParams: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
    controls: { expanded: true },
  },
}

/**
 * A signal is used to draw attention to notifications and new content.
 *
 * The signal's style matches the button's rank and variant by default.
 */
export const Signal: Story = {
  ...DefaultParams,
  name: 'Signal',
  render: (args) => html`
    <gds-flex height="200px">
      <gds-fab inset="auto 40px 40px auto">
        Primary <gds-signal slot="trail"></gds-signal>
      </gds-fab>
    </gds-flex>
  `,
}
