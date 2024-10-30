import type { Meta, StoryObj } from '@storybook/web-components'

import './signal'
import '../fab'
import '../flex'

import { html } from 'lit'

const meta: Meta = {
  title: 'Components/Signal',
  component: 'gds-signal',
  tags: ['autodocs'],
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
 * The `gds-signal` component is used to indicate that there is something new or updated.
 * It is used in conjunction with the `gds-fab` component to draw attention to important actions or notifications.
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
